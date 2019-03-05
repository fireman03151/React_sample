/* global describe it expect */
import sinon from 'sinon';
import { mockReq, mockRes } from 'sinon-express-mock';
import jwt from 'jsonwebtoken';

import createRequestAuthorization, {
  isWhiteListedPath
} from './request-authorization';

const validJWTSecret = 'this is a super secret string';
const invalidJWTSecret = 'This is not correct secret';
const now = new Date(Date.now());
const theBeginningOfTime = new Date(0);
const accessToken = {
  id: '123abc',
  userId: '456def',
  ttl: 60000,
  created: now
};
const users = {
  '456def': {
    username: 'camperbot',
    progressTimestamps: [1, 2, 3, 4]
  }
};
const mockGetUserById = id =>
  id in users ? Promise.resolve(users[id]) : Promise.reject('No user found');

describe('request-authorization', () => {
  describe('isWhiteListedPath', () => {
    const whiteList = [/^\/is-ok\//, /^\/this-is\/also\/ok\//];

    it('returns a boolean', () => {
      const result = isWhiteListedPath();

      expect(typeof result).toBe('boolean');
    });

    it('returns true for a white listed path', () => {
      expect.assertions(2);

      const resultA = isWhiteListedPath('/is-ok/should-be/good', whiteList);
      const resultB = isWhiteListedPath('/this-is/also/ok/surely', whiteList);
      expect(resultA).toBe(true);
      expect(resultB).toBe(true);
    });

    it('returns false for a non-white-listed path', () => {
      const result = isWhiteListedPath('/hax0r-42/no-go', whiteList);
      expect(result).toBe(false);
    });
  });

  describe('createRequestAuthorization', () => {
    const requestAuthorization = createRequestAuthorization({
      jwtSecret: validJWTSecret,
      getUserById: mockGetUserById
    });

    it('is a function', () => {
      expect(typeof requestAuthorization).toEqual('function');
    });

    describe('cookies', () => {
      it('throws when no access token is present', () => {
        expect.assertions(2);
        const req = mockReq({ path: '/internal/some-path/that-needs/auth' });
        const res = mockRes();
        const next = sinon.spy();
        expect(() => requestAuthorization(req, res, next)).toThrowError(
          'Access token is required for this request'
        );
        expect(next.called).toBe(false);
      });

      it('throws when the access token is invalid', () => {
        expect.assertions(2);
        const invalidJWT = jwt.sign({ accessToken }, invalidJWTSecret);
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          // eslint-disable-next-line camelcase
          cookie: { jwt_access_token: invalidJWT }
        });
        const res = mockRes();
        const next = sinon.spy();

        expect(() => requestAuthorization(req, res, next)).toThrowError(
          'Access token is invalid'
        );
        expect(next.called).toBe(false);
      });

      it('throws when the access token has expired', () => {
        expect.assertions(2);
        const invalidJWT = jwt.sign(
          { accessToken: { ...accessToken, created: theBeginningOfTime } },
          validJWTSecret
        );
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          // eslint-disable-next-line camelcase
          cookie: { jwt_access_token: invalidJWT }
        });
        const res = mockRes();
        const next = sinon.spy();

        expect(() => requestAuthorization(req, res, next)).toThrowError(
          'Access token is no longer vaild'
        );
        expect(next.called).toBe(false);
      });

      it('adds the user to the request object', async done => {
        expect.assertions(3);
        const validJWT = jwt.sign({ accessToken }, validJWTSecret);
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          // eslint-disable-next-line camelcase
          cookie: { jwt_access_token: validJWT }
        });
        const res = mockRes();
        const next = sinon.spy();
        await requestAuthorization(req, res, next);
        expect(next.called).toBe(true);
        expect(req).toHaveProperty('user');
        expect(req.user).toEqual(users['456def']);
        return done();
      });

      it('adds the jwt to the headers', async done => {
        const validJWT = jwt.sign({ accessToken }, validJWTSecret);
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          // eslint-disable-next-line camelcase
          cookie: { jwt_access_token: validJWT }
        });
        const res = mockRes();
        const next = sinon.spy();
        await requestAuthorization(req, res, next);
        expect(res.set.calledWith('X-fcc-access-token', validJWT)).toBe(true);
        return done();
      });

      it('calls next if request does not require authorization', async () => {
        const req = mockReq({ path: '/unauthenticated/another/route' });
        const res = mockRes();
        const next = sinon.spy();
        await requestAuthorization(req, res, next);
        expect(next.called).toBe(true);
      });
    });

    describe('Auth header', () => {
      it('throws when no access token is present', () => {
        expect.assertions(2);
        const req = mockReq({ path: '/internal/some-path/that-needs/auth' });
        const res = mockRes();
        const next = sinon.spy();
        expect(() => requestAuthorization(req, res, next)).toThrowError(
          'Access token is required for this request'
        );
        expect(next.called).toBe(false);
      });

      it('throws when the access token is invalid', () => {
        expect.assertions(2);
        const invalidJWT = jwt.sign({ accessToken }, invalidJWTSecret);
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          headers: { 'X-fcc-access-token': invalidJWT }
        });
        const res = mockRes();
        const next = sinon.spy();

        expect(() => requestAuthorization(req, res, next)).toThrowError(
          'Access token is invalid'
        );
        expect(next.called).toBe(false);
      });

      it('throws when the access token has expired', () => {
        expect.assertions(2);
        const invalidJWT = jwt.sign(
          { accessToken: { ...accessToken, created: theBeginningOfTime } },
          validJWTSecret
        );
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          headers: { 'X-fcc-access-token': invalidJWT }
        });
        const res = mockRes();
        const next = sinon.spy();

        expect(() => requestAuthorization(req, res, next)).toThrowError(
          'Access token is no longer vaild'
        );
        expect(next.called).toBe(false);
      });

      it('adds the user to the request object', async done => {
        expect.assertions(3);
        const validJWT = jwt.sign({ accessToken }, validJWTSecret);
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          headers: { 'X-fcc-access-token': validJWT }
        });
        const res = mockRes();
        const next = sinon.spy();
        await requestAuthorization(req, res, next);
        expect(next.called).toBe(true);
        expect(req).toHaveProperty('user');
        expect(req.user).toEqual(users['456def']);
        return done();
      });

      it('adds the jwt to the headers', async done => {
        const validJWT = jwt.sign({ accessToken }, validJWTSecret);
        const req = mockReq({
          path: '/internal/some-path/that-needs/auth',
          // eslint-disable-next-line camelcase
          cookie: { jwt_access_token: validJWT }
        });
        const res = mockRes();
        const next = sinon.spy();
        await requestAuthorization(req, res, next);
        expect(res.set.calledWith('X-fcc-access-token', validJWT)).toBe(true);
        return done();
      });

      it('calls next if request does not require authorization', async () => {
        const req = mockReq({ path: '/unauthenticated/another/route' });
        const res = mockRes();
        const next = sinon.spy();
        await requestAuthorization(req, res, next);
        expect(next.called).toBe(true);
      });
    });
  });
});
