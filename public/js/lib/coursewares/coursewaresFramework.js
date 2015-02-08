/**
 * Created by nathanleniz on 2/2/15.
 */

var widgets = [];
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "text/html",
    theme: 'monokai',
    runnable: true,
    //lint: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    scrollbarStyle: 'null',
    lineWrapping: true,
    gutters: ["CodeMirror-lint-markers"],
    onKeyEvent: doLinting
});
var editor = myCodeMirror;


// Hijack tab key to insert two spaces instead
editor.setOption("extraKeys", {
    Tab: function(cm) {
        var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
        cm.replaceSelection(spaces);
    },
    "Ctrl-Enter": function() {
        bonfireExecute();
        return false;
    }
});

editor.setSize("100%", "auto");

var libraryIncludes = "<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>" +
        "<script>document.domain = 'localhost'</script>" +
        "<script src='/js/lib/chai/chai.js'></script>" +
        "<script src='/js/lib/chai/chai-jquery.js'></script>" +
        "<script src='//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js'></script>" +
        "<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css'/>" +
        "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'/>" +
        "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'/>" +
        "<style>body { padding: 0px 3px 0px 3px; }</style>";


var otherTestsForNow = "<script src='/js/lib/coursewares/iFrameScripts.js'></script>";

var delay;
// Initialize CodeMirror editor with a nice html5 canvas demo.
editor.on("change", function () {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
});
var nodeEnv = prodOrDev === 'production' ? 'http://www.freecodecamp.com' : 'http://localhost:3001';
function updatePreview() {
    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    preview.open();
    preview.write(libraryIncludes + editor.getValue() + otherTestsForNow);
    preview.close();
}
setTimeout(updatePreview, 300);

/**
 * Window postMessage receiving funtionality
 */
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
    if (e.data === 'CompleteAwesomeSauce') {
        showCompletion();
    }
},false);

var challengeSeed = challengeSeed || null;
var tests = tests || [];
var allSeeds = '';
(function() {
    challengeSeed.forEach(function(elem) {
        allSeeds += elem + '\n';
    });
})();

myCodeMirror.setValue(allSeeds);

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


function showCompletion() {
    $('#complete-courseware-dialog').modal('show');
    $('#complete-courseware-dialog').keydown(function(e) {
        if (e.ctrlKey && e.keyCode == 13) {
            $('.next-courseware-button').click();
        }
    });
}