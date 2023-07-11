import Ajv from 'ajv';
import secureSchema from 'ajv/lib/refs/json-schema-secure.json';

import { schemas } from './schemas';

// it's not strict, but that's okay - we're not using it to validate data
const ajv = new Ajv({ strictTypes: false });
const isSchemaSecure = ajv.compile(secureSchema);

// These schemas will fail the tests, so can only be checked by hand.
const ignoredSchemas = ['getSessionUser'];

describe('Schemas do not use obviously dangerous validation', () => {
  Object.entries(schemas)
    .filter(([schema]) => !ignoredSchemas.includes(schema))
    .forEach(([name, schema]) => {
      describe(`schema ${name} is okay`, () => {
        if ('body' in schema) {
          test('body is secure', () => {
            expect(isSchemaSecure(schema.body)).toBeTruthy();
          });
        }

        if ('querystring' in schema) {
          test('querystring is secure', () => {
            expect(isSchemaSecure(schema.querystring)).toBeTruthy();
          });
        }

        if ('params' in schema) {
          test('params is secure', () => {
            expect(isSchemaSecure(schema.params)).toBeTruthy();
          });
        }

        if ('headers' in schema) {
          test('headers is secure', () => {
            expect(isSchemaSecure(schema.headers)).toBeTruthy();
          });
        }

        Object.entries(schema.response).forEach(([code, codeSchema]) => {
          test(`response ${code} is secure`, () => {
            expect(isSchemaSecure(codeSchema)).toBeTruthy();
          });
        });
      });
    });
});
