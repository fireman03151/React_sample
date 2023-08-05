import { FastifyPluginCallback } from 'fastify';

import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    sendEmail: SendEmail;
  }
}

export type SendEmailArgs = {
  to: string;
  from: string;
  subject: string;
  text: string;
};

type SendEmail = (args: SendEmailArgs) => Promise<void>;

export interface MailProvider {
  send: SendEmail;
}

const plugin: FastifyPluginCallback<{ provider: MailProvider }> = (
  fastify,
  options,
  done
) => {
  const { provider } = options;

  if (!provider)
    return done(
      Error(
        "The mailer plugin must be passed a provider via register's options."
      )
    );

  fastify.decorate(
    'sendEmail',
    async (args: SendEmailArgs) => await provider.send(args)
  );

  done();
};

export default fp(plugin);
