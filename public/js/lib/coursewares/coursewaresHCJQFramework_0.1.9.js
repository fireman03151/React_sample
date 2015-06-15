/**
 * Created by nathanleniz on 2/2/15.
 */

var widgets = [];
var editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
  lineNumbers: true,
  mode: "text/html",
  theme: 'monokai',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ["CodeMirror-lint-markers"],
  onKeyEvent: doLinting
});

var defaultKeymap = {
  'Cmd-E': 'emmet.expand_abbreviation',
  'Tab': 'emmet.expand_abbreviation_with_tab',
  'Enter': 'emmet.insert_formatted_line_break_only'
};

emmetCodeMirror(editor, defaultKeymap);


// Hijack tab key to insert two spaces instead
editor.setOption("extraKeys", {
  Tab: function(cm) {
    if (cm.somethingSelected()){
      cm.indentSelection("add");
    } else {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  },
  "Shift-Tab": function(cm) {
    if (cm.somethingSelected()){
      cm.indentSelection("subtract");
    } else {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  }
});

editor.setSize("100%", "auto");

var libraryIncludes = "<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>" +
  "<script src='/js/lib/chai/chai.js'></script>" +
  "<script src='/js/lib/chai/chai-jquery.js'></script>" +
  "<script src='//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js'></script>" +
  "<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css'/>" +
  "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'/>" +
  "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'/>" +
  "<style>body { padding: 0px 3px 0px 3px; }</style>" +
  "<script>var expect = chai.expect; var should = chai.should(); var assert = chai.assert;</script>";


var editorValueForIFrame;
var iFrameScript = "<script src='/js/lib/coursewares/iFrameScripts_0.0.4.js'></script>";

var delay;
// Initialize CodeMirror editor with a nice html5 canvas demo.
editor.on("keyup", function () {
  clearTimeout(delay);
  delay = setTimeout(updatePreview, 300);
});

var nodeEnv = prodOrDev === 'production' ? 'http://www.freecodecamp.com' : 'http://localhost:3001';
function updatePreview() {
  editorValueForIFrame = editor.getValue();
  goodTests = 0;
  var previewFrame = document.getElementById('preview');
  var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  preview.open();
  $('#testSuite').empty();
  preview.write(libraryIncludes + editor.getValue() + iFrameScript);
  preview.close();

}
setTimeout(updatePreview, 300);

/**
 * "post" methods
 */

var testResults = [];
var postSuccess = function(data) {
  var testDoc = document.createElement("div");
  $(testDoc)
    .html("<div class='row'><div class='col-xs-2 text-center'><i class='ion-checkmark-circled big-success-icon'></i></div><div class='col-xs-10 test-output test-vertical-center wrappable'>" + JSON.parse(data) + "</div>");
  $('#testSuite').append(testDoc);
  testSuccess();
};

var postError = function(data) {
  var testDoc = document.createElement("div");
  $(testDoc)
    .html("<div class='row'><div class='col-xs-2 text-center'><i class='ion-close-circled big-error-icon'></i></div><div class='col-xs-10 test-vertical-center test-output wrappable'>" + JSON.parse(data) + "</div>");
  $('#testSuite').append(testDoc);
};
var goodTests = 0;
var testSuccess = function() {
  goodTests++;
  if (goodTests === tests.length) {
    showCompletion();
  }
};

var challengeSeed = challengeSeed || null;
var allSeeds = '';
(function() {
  challengeSeed.forEach(function(elem) {
    allSeeds += elem.replace(/fccss/g, '<script>').replace(/fcces/g,'</script>') + '\n';
  });
  editor.setValue(allSeeds);
  (function() {
    setTimeout(function() {
      editor.refresh();
    }, 200);
  })();
})();


function doLinting () {
  editor.operation(function () {
    for (var i = 0; i < widgets.length; ++i)
      editor.removeLineWidget(widgets[i]);
    widgets.length = 0;
    JSHINT(editor.getValue());
    for (var i = 0; i < JSHINT.errors.length; ++i) {
      var err = JSHINT.errors[i];
      if (!err) continue;
      var msg = document.createElement("div");
      var icon = msg.appendChild(document.createElement("span"));
      icon.innerHTML = "!!";
      icon.className = "lint-error-icon";
      msg.appendChild(document.createTextNode(err.reason));
      msg.className = "lint-error";
      widgets.push(editor.addLineWidget(err.line - 1, msg, {
        coverGutter: false,
        noHScroll: true
      }));
    }
  });
};

//$('#testSuite').empty();
function showCompletion() {
  var time = Math.floor(Date.now()) - started;
  ga('send', 'event',  'Challenge', 'solved', challenge_Name + ', Time: ' + time);
  $('#next-courseware-button').removeAttr('disabled');
  $('#next-courseware-button').addClass('animated tada');
  if (!userLoggedIn) {
    $('#complete-courseware-dialog').modal('show');
  }
  $('body').keydown(function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
      $('#next-courseware-button').click();
      $('#next-courseware-button').unbind('click');
    }
  });
}
