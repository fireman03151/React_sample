import {
  bothLinks,
  legacySolution,
  invalidGithubLink,
  onlyGithubLink,
  onlySolution,
  withChallenges
} from './__fixtures/completed-challenges';
import { getSolutionDisplayType } from './solution-display-type';

describe('getSolutionDisplayType', () => {
  it('should handle missing solutions', () => {
    expect(getSolutionDisplayType(onlyGithubLink)).toBe('none');
  });
  it('should handle legacy solutions', () => {
    expect(getSolutionDisplayType(legacySolution)).toBe('showFilesSolution');
  });
  it('should handle solutions with files', () => {
    expect(getSolutionDisplayType(withChallenges)).toBe('showFilesSolution');
  });
  it('should handle solutions with a single valid url', () => {
    expect.assertions(2);
    expect(getSolutionDisplayType(onlySolution)).toBe('showProjectLink');
    expect(getSolutionDisplayType(invalidGithubLink)).toBe('showProjectLink');
  });
  it('should handle solutions with both links', () => {
    expect(getSolutionDisplayType(bothLinks)).toBe('showProjectAndGitHubLinks');
  });
});
