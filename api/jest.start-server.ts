import { build } from './src/app';

declare global {
  // eslint-disable-next-line no-var
  var fastifyTestInstance: Awaited<ReturnType<typeof build>>;
}

beforeAll(async () => {
  const fastify = await build();
  await fastify.ready();
  global.fastifyTestInstance = fastify;
});

afterAll(async () => {
  // Due to a prisma bug, this is not enough, we need to --force-exit jest:
  // https://github.com/prisma/prisma/issues/18146
  await fastifyTestInstance?.close();
});
