/*
MIT License

Copyright (c) 2018 Ethan Arrowood

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import assert from 'node:assert';
// eslint-disable-next-line import/no-unresolved
import { describe, it } from 'node:test';
import Fastify from 'fastify';
import jwtAuthz from './fastify-jwt-authz';

interface ErrorResponse {
  statusCode: number;
  error: string;
  message: string;
}

describe('fastify-jwt-authz', { only: true }, () => {
  it('should decorate request instance with jwtAuthz method', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get('/test', function (request) {
      assert(request.jwtAuthz);
      return { foo: 'bar' };
    });

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test'
    });

    assert.strictEqual(res.statusCode, 200);
  });

  it('should throw an error "Scopes cannot be empty" with an empty scopes parameter', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test2',
      {
        preHandler: function (request, _reply, done) {
          void request.jwtAuthz([], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test2'
    });
    const resData: ErrorResponse = res.json();

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(resData.message, 'Scopes cannot be empty');
  });

  it('should throw an error "request.user does not exist" non existing request.user', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test3',
      {
        preHandler: function (request, _reply, done) {
          void request.jwtAuthz(['baz'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test3'
    });
    const resData: ErrorResponse = res.json();

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(resData.message, 'request.user does not exist');
  });

  it('should throw an error "request.user.scope must be a string"', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test4',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 123
          };
          void request.jwtAuthz(['baz'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test4'
    });
    const resData: ErrorResponse = res.json();

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(resData.message, 'request.user.scope must be a string');
  });

  it('should throw an error "Insufficient scope"', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test5',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 'baz'
          };
          void request.jwtAuthz(['foo'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test5'
    });
    const resData: ErrorResponse = res.json();

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(resData.message, 'Insufficient scope');
  });

  it('should verify user scope', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test6',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 'user manager'
          };
          void request.jwtAuthz(['user'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test6'
    });

    const resData: { foo: string } = res.json();

    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(resData.foo, 'bar');
  });
});
