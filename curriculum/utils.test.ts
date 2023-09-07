// utils are not typed (yet), so we have to disable some checks
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { SuperBlocks } from '../shared/config/superblocks';
import { createSuperOrder, getSuperOrder, getSuperBlockFromDir } from './utils';

config({ path: path.resolve(__dirname, '../.env') });

const mockSuperBlocks = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.JsAlgoDataStruct,
  SuperBlocks.FrontEndDevLibs,
  SuperBlocks.DataVis,
  SuperBlocks.RelationalDb,
  SuperBlocks.BackEndDevApis,
  SuperBlocks.QualityAssurance,
  SuperBlocks.SciCompPy,
  SuperBlocks.DataAnalysisPy,
  SuperBlocks.InfoSec,
  SuperBlocks.MachineLearningPy,
  SuperBlocks.CollegeAlgebraPy,
  SuperBlocks.FoundationalCSharp,
  SuperBlocks.CodingInterviewPrep,
  SuperBlocks.ProjectEuler,
  SuperBlocks.RespWebDesign,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.TheOdinProject,
  SuperBlocks.ExampleCertification
];

const fullSuperOrder = {
  [SuperBlocks.RespWebDesignNew]: 0,
  [SuperBlocks.JsAlgoDataStruct]: 1,
  [SuperBlocks.FrontEndDevLibs]: 2,
  [SuperBlocks.DataVis]: 3,
  [SuperBlocks.RelationalDb]: 4,
  [SuperBlocks.BackEndDevApis]: 5,
  [SuperBlocks.QualityAssurance]: 6,
  [SuperBlocks.SciCompPy]: 7,
  [SuperBlocks.DataAnalysisPy]: 8,
  [SuperBlocks.InfoSec]: 9,
  [SuperBlocks.MachineLearningPy]: 10,
  [SuperBlocks.CollegeAlgebraPy]: 11,
  [SuperBlocks.FoundationalCSharp]: 12,
  [SuperBlocks.CodingInterviewPrep]: 13,
  [SuperBlocks.ProjectEuler]: 14,
  [SuperBlocks.RespWebDesign]: 15,
  [SuperBlocks.JsAlgoDataStructNew]: 16,
  [SuperBlocks.TheOdinProject]: 17,
  [SuperBlocks.ExampleCertification]: 18
};

describe('createSuperOrder', () => {
  const superOrder = createSuperOrder(mockSuperBlocks);

  it('should create the correct object given an array of SuperBlocks', () => {
    expect(superOrder).toStrictEqual(fullSuperOrder);
  });

  it('throws when not given an array of SuperBlocks', () => {
    expect.assertions(4);
    expect(() => getSuperOrder()).toThrow();
    expect(() => getSuperOrder(null)).toThrow();
    expect(() => getSuperOrder('')).toThrow();
    expect(() => getSuperOrder(['respansive-wib-desoin'])).toThrow();
  });
});

describe('getSuperOrder', () => {
  it('returns a number for valid superblocks', () => {
    expect.assertions(1);
    expect(typeof getSuperOrder('responsive-web-design')).toBe('number');
  });

  it('throws for unknown superblocks', () => {
    expect.assertions(4);
    expect(() => getSuperOrder()).toThrow();
    expect(() => getSuperOrder(null)).toThrow();
    expect(() => getSuperOrder('')).toThrow();
    expect(() => getSuperOrder('respansive-wib-desoin')).toThrow();
  });

  it('throws for "certifications"', () => {
    expect.assertions(1);
    expect(() => getSuperOrder('certifications')).toThrow();
  });

  it('returns unique numbers for all current superblocks', () => {
    if (
      process.env.SHOW_NEW_CURRICULUM !== 'true' &&
      process.env.SHOW_UPCOMING_CHANGES !== 'true'
    ) {
      expect.assertions(16);
    } else if (process.env.SHOW_NEW_CURRICULUM !== 'true') {
      expect.assertions(16);
    } else if (process.env.SHOW_UPCOMING_CHANGES !== 'true') {
      expect.assertions(16);
    } else {
      expect.assertions(19);
    }

    expect(getSuperOrder(SuperBlocks.RespWebDesignNew)).toBe(0);
    expect(getSuperOrder(SuperBlocks.JsAlgoDataStruct)).toBe(1);
    expect(getSuperOrder(SuperBlocks.FrontEndDevLibs)).toBe(2);
    expect(getSuperOrder(SuperBlocks.DataVis)).toBe(3);
    expect(getSuperOrder(SuperBlocks.RelationalDb)).toBe(4);
    expect(getSuperOrder(SuperBlocks.BackEndDevApis)).toBe(5);
    expect(getSuperOrder(SuperBlocks.QualityAssurance)).toBe(6);
    expect(getSuperOrder(SuperBlocks.SciCompPy)).toBe(7);
    expect(getSuperOrder(SuperBlocks.DataAnalysisPy)).toBe(8);
    expect(getSuperOrder(SuperBlocks.InfoSec)).toBe(9);
    expect(getSuperOrder(SuperBlocks.MachineLearningPy)).toBe(10);
    expect(getSuperOrder(SuperBlocks.CollegeAlgebraPy)).toBe(11);
    expect(getSuperOrder(SuperBlocks.FoundationalCSharp)).toBe(12);
    expect(getSuperOrder(SuperBlocks.CodingInterviewPrep)).toBe(13);
    expect(getSuperOrder(SuperBlocks.ProjectEuler)).toBe(14);
    expect(getSuperOrder(SuperBlocks.RespWebDesign)).toBe(15);

    if (
      process.env.SHOW_NEW_CURRICULUM === 'true' &&
      process.env.SHOW_UPCOMING_CHANGES === 'true'
    ) {
      expect(getSuperOrder(SuperBlocks.JsAlgoDataStructNew)).toBe(16);
      expect(getSuperOrder(SuperBlocks.TheOdinProject)).toBe(17);
      expect(getSuperOrder(SuperBlocks.ExampleCertification)).toBe(18);
    } else if (process.env.SHOW_NEW_CURRICULUM === 'true') {
      return;
    } else if (process.env.SHOW_UPCOMING_CHANGES === 'true') {
      expect(getSuperOrder(SuperBlocks.JsAlgoDataStructNew)).toBe(16);
      expect(getSuperOrder(SuperBlocks.TheOdinProject)).toBe(17);
      expect(getSuperOrder(SuperBlocks.ExampleCertification)).toBe(18);
    }
  });
});

describe('getSuperBlockFromPath', () => {
  const directories = fs.readdirSync(
    path.join(__dirname, './challenges/english')
  );

  it('handles all the directories in ./challenges/english', () => {
    expect.assertions(21);

    for (const directory of directories) {
      expect(() => getSuperBlockFromDir(directory)).not.toThrow();
    }
  });

  it("returns valid superblocks (or 'certifications') for all valid arguments", () => {
    expect.assertions(21);

    const superBlockPaths = directories.filter(x => x !== '00-certifications');

    for (const directory of superBlockPaths) {
      expect(Object.values(SuperBlocks)).toContain(
        getSuperBlockFromDir(directory)
      );
    }
    expect(getSuperBlockFromDir('00-certifications')).toBe('certifications');
  });

  it("returns all valid superblocks (and 'certifications')", () => {
    expect.assertions(1);

    const superBlocks = new Set();
    for (const directory of directories) {
      superBlocks.add(getSuperBlockFromDir(directory));
    }

    // + 1 for 'certifications'
    expect(superBlocks.size).toBe(Object.values(SuperBlocks).length + 1);
  });

  it('throws if a directory is unknown', () => {
    expect.assertions(1);

    expect(() => getSuperBlockFromDir('unknown')).toThrow();
  });
});
