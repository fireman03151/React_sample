window.common = (function({ Rx: { Observable }, common = { init: [] } }) {
  var libraryIncludes = `
<link
  rel='stylesheet'
  href='//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css'
  />
<link
  rel='stylesheet'
  href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'
  />

<link
  rel='stylesheet'
  href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
  />

<style>
  body { padding: 0px 3px 0px 3px; }
</style>
  `;

  const iFrameScript$ =
    common.getScriptContent$('/js/iFrameScripts.js').shareReplay();

  // runPreviewTests$ should be set up in the preview window
  common.runPreviewTests$ =
    () => Observable.throw({ err: new Error('run preview not enabled') });

  common.updatePreview$ = function updatePreview$(code = '') {
    const previewFrame = document.getElementById('preview');
    const preview = previewFrame.contentDocument ||
      previewFrame.contentWindow.document;
    if (!preview) {
      return Observable.just(code);
    }

    return iFrameScript$
      .map(script => `<script>${script}</script>`)
      .doOnNext(script => {
        preview.open();
        preview.write(libraryIncludes + code + script);
        preview.close();
      })
      .map(() => code);
  };

  return common;
}(window));
