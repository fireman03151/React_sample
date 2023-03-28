import fastifyAuth0 from 'fastify-auth0-verify';
import Fastify, {
  FastifyBaseLogger,
  FastifyHttpOptions,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault
} from 'fastify';
import middie from '@fastify/middie';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import MongoStore from 'connect-mongo';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

import jwtAuthz from './plugins/fastify-jwt-authz';
import sessionAuth from './plugins/session-auth';
import { testRoutes } from './routes/test';
import { auth0Routes } from './routes/auth0';
import { testValidatedRoutes } from './routes/validation-test';
import { testMiddleware } from './middleware';
import prismaPlugin from './db/prisma';

import {
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  NODE_ENV,
  MONGOHQ_URL,
  SESSION_SECRET,
  FCC_ENABLE_SWAGGER_UI,
  API_LOCATION
} from './utils/env';

export type FastifyInstanceWithTypeProvider = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

export const build = async (
  options: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger> = {}
): Promise<FastifyInstanceWithTypeProvider> => {
  const fastify = Fastify(options).withTypeProvider<TypeBoxTypeProvider>();

  fastify.get('/', async (_request, _reply) => {
    return { hello: 'world' };
  });
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(middie);
  await fastify.register(fastifyCookie);
  // @ts-expect-error - @fastify/session's types are not, yet, compatible with
  // express-session's types
  await fastify.register(fastifySession, {
    secret: SESSION_SECRET,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      secure: NODE_ENV !== 'development'
    },
    store: MongoStore.create({
      mongoUrl: MONGOHQ_URL
    })
  });

  // Swagger plugin
  if (FCC_ENABLE_SWAGGER_UI) {
    void fastify.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'freeCodeCamp API',
          version: '1.0.0' // API version
        },
        components: {
          securitySchemes: {
            session: {
              type: 'apiKey',
              name: 'sessionId',
              in: 'cookie'
            }
          }
        },
        security: [{ session: [] }]
      }
    });
    void fastify.register(fastifySwaggerUI);
    fastify.log.info(`Swagger UI available at ${API_LOCATION}/documentation`);
  }

  // Auth0 plugin
  void fastify.register(fastifyAuth0, {
    domain: AUTH0_DOMAIN,
    audience: AUTH0_AUDIENCE
  });
  void fastify.register(jwtAuthz);
  void fastify.register(sessionAuth);

  void fastify.use('/test', testMiddleware);

  void fastify.register(prismaPlugin);

  void fastify.register(testRoutes);
  void fastify.register(auth0Routes, { prefix: '/auth0' });
  void fastify.register(testValidatedRoutes);
  return fastify;
};
