window.common = (function(global) {
  const {
    $,
    Rx: { Observable },
    common = { init: [] }
  } = global;

  common.ctrlEnterClickHandler = function ctrlEnterClickHandler(e) {
    // ctrl + enter or cmd + enter
    if (
      e.keyCode === 13 &&
      (e.metaKey || e.ctrlKey)
    ) {
      $('#complete-courseware-dialog').off('keydown', ctrlEnterClickHandler);
      if ($('#submit-challenge').length > 0) {
        $('#submit-challenge').click();
      } else {
        window.location = '/challenges/next-challenge?id=' + common.challengeId;
      }
    }
  };

  common.init.push(function($) {

    var $marginFix = $('.innerMarginFix');
    $marginFix.css('min-height', $marginFix.height());

    common.submitBtn$ = Observable.fromEvent($('#submitButton'), 'click');

    common.resetBtn$ = Observable.fromEvent($('#reset-button'), 'click');

    // init modal keybindings on open
    $('#complete-courseware-dialog').on('shown.bs.modal', function() {
      $('#complete-courseware-dialog').keydown(common.ctrlEnterClickHandler);
    });

    // remove modal keybinds on close
    $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
      $('#complete-courseware-dialog').off(
        'keydown',
        common.ctrlEnterClickHandler
      );
    });

    // video checklist binding
    $('.challenge-list-checkbox').on('change', function() {
      var checkboxId = $(this).parent().parent().attr('id');
      if ($(this).is(':checked')) {
        $(this).parent().siblings().children().addClass('faded');
        if (!localStorage || !localStorage[checkboxId]) {
          localStorage[checkboxId] = true;
        }
      }

      if (!$(this).is(':checked')) {
        $(this).parent().siblings().children().removeClass('faded');
        if (localStorage[checkboxId]) {
          localStorage.removeItem(checkboxId);
        }
      }
    });

    $('.checklist-element').each(function() {
      var checklistElementId = $(this).attr('id');
      if (localStorage[checklistElementId]) {
        $(this).children().children('li').addClass('faded');
        $(this).children().children('input').trigger('click');
      }
    });


    // video challenge submit
    $('#next-courseware-button').on('click', function() {
      $('#next-courseware-button').unbind('click');
      if ($('.signup-btn-nav').length < 1) {
        var data;
        var solution = $('#public-url').val() || null;
        var githubLink = $('#github-url').val() || null;
        switch (common.challengeType) {
          case common.challengeTypes.VIDEO:
            data = {
              id: common.challengeId,
              name: common.challengeName,
              challengeType: +common.challengeType
            };
            $.ajax({
              url: '/completed-challenge/',
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              dataType: 'json'
            })
              .success(function(res) {
                if (!res) {
                  return;
                }
                window.location.href = '/challenges/next-challenge?id=' +
                  common.challengeId;
              })
              .fail(function() {
                window.location.replace(window.location.href);
              });

            break;
          case common.challengeTypes.BASEJUMP:
          case common.challengeTypes.ZIPLINE:
            data = {
              id: common.challengeId,
              name: common.challengeName,
              challengeType: +common.challengeType,
              solution,
              githubLink
            };

            $.ajax({
              url: '/completed-zipline-or-basejump/',
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              dataType: 'json'
            })
              .success(function() {
                window.location.href = '/challenges/next-challenge?id=' +
                  common.challengeId;
              })
              .fail(function() {
                window.location.replace(window.location.href);
              });
            break;

          case common.challengeTypes.BONFIRE:
            window.location.href = '/challenges/next-challenge?id=' +
              common.challengeId;
            break;

          default:
            console.log('Happy Coding!');
            break;
          }
      }
    });

    if (common.challengeName) {
      window.ga('send', 'event', 'Challenge', 'load', common.gaName);
    }

    $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
      if (common.editor.focus) {
        common.editor.focus();
      }
    });

    $('#trigger-issue-modal').on('click', function() {
      $('#issue-modal').modal('show');
    });

    $('#trigger-help-modal').on('click', function() {
      $('#help-modal').modal('show');
    });

    $('#trigger-reset-modal').on('click', function() {
      $('#reset-modal').modal('show');
    });

    $('#trigger-pair-modal').on('click', function() {
      $('#pair-modal').modal('show');
    });

    $('#completed-courseware').on('click', function() {
      $('#complete-courseware-dialog').modal('show');
    });

    $('#help-ive-found-a-bug-wiki-article').on('click', function() {
      window.open(
        'https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/' +
          "Help-I've-Found-a-Bug",
        '_blank'
      );
    });

    $('#search-issue').on('click', function() {
      var queryIssue = window.location.href
        .toString()
        .split('?')[0]
        .replace(/(#*)$/, '');
      window.open(
        'https://github.com/FreeCodeCamp/FreeCodeCamp/issues?q=' +
        'is:issue is:all ' +
        (common.challengeName) +
        ' OR ' +
        queryIssue
          .substr(queryIssue.lastIndexOf('challenges/') + 11)
          .replace('/', ''), '_blank');
    });

  });

  return common;
}(window));
