const path = require('path');
const fs = require('fs');
const { translationsSchema } = require('./translations-schema');
const { availableLangs } = require('./allLangs');
const { trendingSchema } = require('./trending-schema');
const { motivationSchema } = require('./motivation-schema');

/**
 * Flattens a nested object structure into a single
 * object with property chains as keys.
 * @param {Object} obj Object to flatten
 * @param {String} namespace Used for property chaining
 */
const flattenAnObject = (obj, namespace = '') => {
  const flattened = {};
  Object.keys(obj).forEach(key => {
    if (Array.isArray(obj[key])) {
      flattened[namespace ? `${namespace}.${key}` : key] = obj[key];
    } else if (typeof obj[key] === 'object') {
      Object.assign(
        flattened,
        flattenAnObject(obj[key], namespace ? `${namespace}.${key}` : key)
      );
    } else {
      flattened[namespace ? `${namespace}.${key}` : key] = obj[key];
    }
  });
  return flattened;
};

/**
 * Checks if a translation object is missing keys
 * that are present in the schema.
 * @param {String[]} file Array of translation object's keys
 * @param {String[]} schema Array of matching schema's keys
 * @param {String} path string path to file
 */
const findMissingKeys = (file, schema, path) => {
  const missingKeys = [];
  for (const key of schema) {
    if (!file.includes(key)) {
      missingKeys.push(key);
    }
  }
  if (missingKeys.length) {
    throw new Error(
      `${path} is missing these required keys: ${missingKeys.join(', ')}`
    );
  }
};

/**
 * Checks if a translation object has extra
 * keys which are NOT present in the schema.
 * @param {String[]} file Array of translation object's keys
 * @param {String[]} schema Array of matching schema's keys
 * @param {String} path string path to file
 */
const findExtraneousKeys = (file, schema, path) => {
  const extraKeys = [];
  for (const key of file) {
    if (!schema.includes(key)) {
      extraKeys.push(key);
    }
  }
  if (extraKeys.length) {
    throw new Error(
      `${path} has these keys that are not in the schema: ${extraKeys.join(
        ', '
      )}`
    );
  }
};

/**
 * Validates that all values in the object are non-empty. Includes
 * validation of nested objects.
 * @param {Object} obj The object to check the values of
 * @param {String} namespace String for tracking nested properties
 */
const noEmptyObjectValues = (obj, namespace = '') => {
  const emptyKeys = [];
  for (const key of Object.keys(obj)) {
    if (Array.isArray(obj[key])) {
      if (!obj[key].length) {
        emptyKeys.push(namespace ? `${namespace}.${key}` : key);
      }
    } else if (typeof obj[key] === 'object') {
      emptyKeys.push(
        noEmptyObjectValues(obj[key], namespace ? `${namespace}.${key}` : key)
      );
    } else if (!obj[key]) {
      emptyKeys.push(namespace ? `${namespace}.${key}` : key);
    }
  }
  return emptyKeys.flat();
};

/**
 * Grab the schema keys once, to avoid overhead of
 * fetching within iterative function.
 */
const translationSchemaKeys = Object.keys(flattenAnObject(translationsSchema));
const trendingSchemaKeys = Object.keys(flattenAnObject(trendingSchema));
const motivationSchemaKeys = Object.keys(flattenAnObject(motivationSchema));

/**
 * Function that checks the translations.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const translationSchemaValidation = languages => {
  languages.forEach(language => {
    const filePath = path.join(
      __dirname,
      `/locales/${language}/translations.json`
    );
    const fileData = fs.readFileSync(filePath);
    const fileJson = JSON.parse(fileData);
    const fileKeys = Object.keys(flattenAnObject(fileJson));
    findMissingKeys(
      fileKeys,
      translationSchemaKeys,
      `${language}/translations.json`
    );
    findExtraneousKeys(
      fileKeys,
      translationSchemaKeys,
      `${language}/translations.json`
    );
    const emptyKeys = noEmptyObjectValues(fileJson);
    if (emptyKeys.length) {
      throw new Error(
        `${language}/translation.json has these empty keys: ${emptyKeys.join(
          ', '
        )}`
      );
    }
    console.info(`${language} translation.json is correct!`);
  });
};

/**
 * Function that checks the trending.json file
 * for each available client language.
 * @param {String[]} languages List of languages to test
 */
const trendingSchemaValidation = languages => {
  languages.forEach(language => {
    const filePath = path.join(__dirname, `/locales/${language}/trending.json`);
    const fileData = fs.readFileSync(filePath);
    const fileJson = JSON.parse(fileData);
    const fileKeys = Object.keys(flattenAnObject(fileJson));
    findMissingKeys(fileKeys, trendingSchemaKeys, `${language}/trending.json`);
    findExtraneousKeys(
      fileKeys,
      trendingSchemaKeys,
      `${language}/trending.json`
    );
    const emptyKeys = noEmptyObjectValues(fileJson);
    if (emptyKeys.length) {
      throw new Error(
        `${language}/trending.json has these empty keys: ${emptyKeys.join(
          ', '
        )}`
      );
    }
    console.info(`${language} trending.json is correct!`);
  });
};

const motivationSchemaValidation = languages => {
  languages.forEach(language => {
    const filePath = path.join(
      __dirname,
      `/locales/${language}/motivation.json`
    );
    const fileData = fs.readFileSync(filePath);
    const fileJson = JSON.parse(fileData);
    const fileKeys = Object.keys(flattenAnObject(fileJson));
    findMissingKeys(
      fileKeys,
      motivationSchemaKeys,
      `${language}/motivation.json`
    );
    findExtraneousKeys(
      fileKeys,
      motivationSchemaKeys,
      `${language}/motivation.json`
    );
    const emptyKeys = noEmptyObjectValues(fileJson);
    if (emptyKeys.length) {
      throw new Error(
        `${language}/motivation.json has these empty keys: ${emptyKeys.join(
          ', '
        )}`
      );
    }
    // Special line to assert that objects in motivational quote are correct
    if (
      !fileJson.motivationalQuotes.every(
        object =>
          object.hasOwnProperty('quote') && object.hasOwnProperty('author')
      )
    ) {
      throw new Error(
        `${language}/motivation.json has malformed quote objects.`
      );
    }
    console.info(`${language} motivation.json is correct!`);
  });
};

translationSchemaValidation(availableLangs.client);
trendingSchemaValidation(availableLangs.client);
motivationSchemaValidation(availableLangs.client);
