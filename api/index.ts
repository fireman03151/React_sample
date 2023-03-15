import fastifyAuth0 from 'fastify-auth0-verify';
import Fastify from 'fastify';
import middie from '@fastify/middie';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import MongoStore from 'connect-mongo';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import jwtAuthz from './plugins/fastify-jwt-authz';
import sessionAuth from './plugins/session-auth';
import { testRoutes } from './routes/test';
import { auth0Routes } from './routes/auth0';
import { testValidatedRoutes } from './routes/validation-test';
import { testMiddleware } from './middleware';

import {
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  NODE_ENV,
  PORT,
  MONGOHQ_URL,
  SESSION_SECRET
} from './utils/env';

import prismaPlugin from './db/prisma';

const fastify = Fastify({
  logger: { level: NODE_ENV === 'development' ? 'debug' : 'fatal' }
}).withTypeProvider<TypeBoxTypeProvider>();

export type FastifyInstanceWithTypeProvider = typeof fastify;

fastify.get('/', async (_request, _reply) => {
  return { hello: 'world' };
});

const start = async () => {
  // NOTE: Awaited to ensure `.use` is registered on `fastify`
  await fastify.register(middie);
  await fastify.register(fastifyCookie);
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

  try {
    const port = Number(PORT);
    fastify.log.info(`Starting server on port ${port}`);
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
