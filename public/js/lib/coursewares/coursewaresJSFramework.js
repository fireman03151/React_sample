var widgets = [];
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "javascript",
    theme: 'monokai',
    runnable: true,
    lint: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    scrollbarStyle: 'null',
    lineWrapping: true,
    gutters: ["CodeMirror-lint-markers"],
    onKeyEvent: doLinting
});
var editor = myCodeMirror;
editor.setSize("100%", "auto");

// Hijack tab key to enter two spaces intead
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
    },
    "Ctrl-Enter": function() {
        bonfireExecute();
        return false;
    }
});



var attempts = 0;
if (attempts) {
    attempts = 0;
}


var codeOutput = CodeMirror.fromTextArea(document.getElementById("codeOutput"), {
    lineNumbers: false,
    mode: "text",
    theme: 'monokai',
    readOnly: 'nocursor',
    lineWrapping: true
});

codeOutput.setValue('/**\n' +
' * Your output will go here.\n' + ' * Console.log() -type statements\n' +
' * will appear in your browser\'s\n' + ' * DevTools JavaScript console.\n' +
' */');
codeOutput.setSize("100%", "100%");
var info = editor.getScrollInfo();
var after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, "local").top;
if (info.top + info.clientHeight < after)
    editor.scrollTo(null, after - info.clientHeight + 3);

var editorValue;


var challengeSeed = challengeSeed || null;
var tests = tests || [];

var allSeeds = '';
(function() {
    challengeSeed.forEach(function(elem) {
        allSeeds += elem + '\n';
    });
})();

editorValue = allSeeds;


myCodeMirror.setValue(editorValue);

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

$('#submitButton').on('click', function () {
    bonfireExecute();
});

function bonfireExecute() {
    attempts++;
    ga('send', 'event',  'Challenge', 'ran-code', challengeName);
    userTests= null;
    $('#codeOutput').empty();
    var userJavaScript = myCodeMirror.getValue();
    userJavaScript = removeComments(userJavaScript);
    userJavaScript = scrapeTests(userJavaScript);
    // simple fix in case the user forgets to invoke their function

    submit(userJavaScript, function(cls, message) {
        if (cls) {
            codeOutput.setValue(message.error);
            runTests('Error', null);
        } else {
            codeOutput.setValue(message.output);
            message.input = removeLogs(message.input);
            runTests(null, message);
        }
    });
}


var userTests;
var testSalt = Math.random();


var scrapeTests = function(userJavaScript) {

    // insert tests from mongo
    for (var i = 0; i < tests.length; i++) {
        userJavaScript += '\n' + tests[i];
    }

    var counter = 0;
    var regex = new RegExp(/(expect(\s+)?\(.*\;)|(assert(\s+)?\(.*\;)|(assert\.\w.*\;)|(.*\.should\..*\;)/);
    var match = regex.exec(userJavaScript);
    while (match != null) {
        var replacement = '//' + counter + testSalt;
        userJavaScript = userJavaScript.substring(0, match.index) + replacement + userJavaScript.substring(match.index + match[0].length);

        if (!userTests) {
            userTests= [];
        }
        userTests.push({"text": match[0], "line": counter, "err": null});
        counter++;
        match = regex.exec(userJavaScript);
    }

    return userJavaScript;
};

function removeComments(userJavaScript) {
    var regex = new RegExp(/(\/\*[^(\*\/)]*\*\/)|\/\/[^\n]*/g);
    return userJavaScript.replace(regex, '');
}

function removeLogs(userJavaScript) {
    return userJavaScript.replace(/(console\.[\w]+\s*\(.*\;)/g, '');
}

var pushed = false;
var createTestDisplay = function() {
    if (pushed) {
        userTests.pop();
    }
    for (var i = 0; i < userTests.length;i++) {
        var test = userTests[i];
        var testDoc = document.createElement("div");
        if (test.err != null) {
            console.log('Should be displaying bad tests');
            $(testDoc)
                .html("<div class='row'><div class='col-xs-2 text-center'><i class='ion-close-circled big-error-icon'></i></div><div class='col-xs-10 test-output wrappable'>" + test.text + "</div><div class='col-xs-10 test-output wrappable'>" + test.err + "</div></div><div class='ten-pixel-break'/>")
                .prependTo($('#testSuite'))
        } else {
            $(testDoc)
                .html("<div class='row'><div class='col-xs-2 text-center'><i class='ion-checkmark-circled big-success-icon'></i></div><div class='col-xs-10 test-output test-vertical-center wrappable'>" + test.text + "</div></div><div class='ten-pixel-break'/>")
                .appendTo($('#testSuite'));
        }
    };
};

var expect = chai.expect;


var reassembleTest = function(test, data) {
    var lineNum = test.line;
    var regexp = new RegExp("\/\/" + lineNum + testSalt);
    return data.input.replace(regexp, test.text);
};

var runTests = function(err, data) {
    var allTestsPassed = true;
    pushed = false;
    $('#testSuite').children().remove();
    if (err && userTests.length > 0) {
        userTests= [{text:"Program Execution Failure", err: "No user tests were run."}];
        createTestDisplay();
    } else if (userTests) {
        userTests.push(false);
        pushed = true;
        userTests.forEach(function(test, ix, arr){
            try {
                if (test) {
                    var output = eval(reassembleTest(test, data));
                }
            } catch(error) {
                allTestsPassed = false;
                arr[ix].err = error.name + ":" + error.message;
            } finally {
                if (!test) {
                    createTestDisplay();
                }
            }
        });

        if (allTestsPassed) {
            allTestsPassed = false;
            showCompletion();
        }

    }
};

function showCompletion() {
    var time = Math.floor(Date.now()) - started;
    ga('send', 'event',  'Challenge', 'solved', challengeName + ', Time: ' + time +', Attempts: ' + attempts);
    $('#complete-courseware-dialog').modal('show');
    $('#complete-courseware-dialog').keydown(function(e) {
        if (e.ctrlKey && e.keyCode == 13) {
            $('.next-bonfire-button').click();
        }
    });
}