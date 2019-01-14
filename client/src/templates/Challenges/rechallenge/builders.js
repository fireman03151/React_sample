import {
  cond,
  flow,
  identity,
  matchesProperty,
  partial,
  stubTrue,
  template as _template
} from 'lodash';

import { compileHeadTail, setExt, transformContents } from '../utils/polyvinyl';

const htmlCatch = '\n<!--fcc-->\n';
const jsCatch = '\n;/*fcc*/\n';

const defaultTemplate = ({ source }) => `
  <body style='margin:8px;'>
    <!-- fcc-start-source -->
      ${source}
    <!-- fcc-end-source -->
  </body>`;

const wrapInScript = partial(
  transformContents,
  content => `${htmlCatch}<script>${content}${jsCatch}</script>`
);
const wrapInStyle = partial(
  transformContents,
  content => `${htmlCatch}<style>${content}</style>`
);
const setExtToHTML = partial(setExt, 'html');
const padContentWithJsCatch = partial(compileHeadTail, jsCatch);
const padContentWithHTMLCatch = partial(compileHeadTail, htmlCatch);

export const jsToHtml = cond([
  [
    matchesProperty('ext', 'js'),
    flow(
      padContentWithJsCatch,
      wrapInScript,
      setExtToHTML
    )
  ],
  [stubTrue, identity]
]);

export const cssToHtml = cond([
  [
    matchesProperty('ext', 'css'),
    flow(
      padContentWithHTMLCatch,
      wrapInStyle,
      setExtToHTML
    )
  ],
  [stubTrue, identity]
]);

// FileStream::concatHtml(
//   required: [ ...Object ],
//   template: String,
//   files: [ polyVinyl ]
// ) => String
export function concatHtml({ required = [], template, files = [] } = {}) {
  const createBody = template ? _template(template) : defaultTemplate;

  const head = required
    .map(({ link, src }) => {
      if (link && src) {
        throw new Error(`
A required file can not have both a src and a link: src = ${src}, link = ${link}
`);
      }
      if (src) {
        return `<script src='${src}' type='text/javascript'></script>`;
      }
      if (link) {
        return `<link href='${link}' rel='stylesheet' />`;
      }
      return '';
    })
    .reduce((head, element) => head.concat(element), '');

  const source = files.reduce(
    (source, file) => source.concat(file.contents, htmlCatch),
    ''
  );

  return `<head>${head}</head>${createBody({ source })}`;
}
