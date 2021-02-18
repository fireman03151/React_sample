const { Octokit } = require('@octokit/rest');

const {
  github: { owner, secret, freeCodeCampRepo, defaultBase }
} = require('../../../lib/config');

const getPRs = async () => {
  const octokit = new Octokit({ auth: secret });

  /* eslint-disable camelcase */
  const methodProps = {
    owner,
    repo: freeCodeCampRepo,
    base: defaultBase,
    state: 'open',
    sort: 'created',
    direction: 'asc',
    per_page: 100
  };

  const openPRs = await octokit.paginate(octokit.pulls.list, methodProps);
  return openPRs;
};

module.exports = getPRs;
