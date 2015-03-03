require('dotenv').load();
var Challenge = require('../models/Challenge.js'),
    Bonfire = require('../models/Bonfire.js'),
    Comment = require('../models/Comment.js'),
    Story = require('../models/Story.js'),
    Courseware = require('../models/Courseware.js'),
    mongoose = require('mongoose'),
    secrets = require('../config/secrets'),
    challenges = require('./challenges.json'),
    coursewares = require('./coursewares.json'),
    stories = require('./stories.json'),
    bonfires = require('./bonfires.json');

mongoose.connect(secrets.db);

var counter = 0;
var offerings = 4;

var CompletionMonitor = function() {
    counter++;
    console.log('call ' + counter);

    if (counter < offerings) {
        return;
    } else {
        process.exit(0);
    }
}

Challenge.remove({}, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('Deleted ', data);
    }
    Challenge.create(challenges, function(err, data) {
        if (err) {
          console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('challenges');
});

Bonfire.remove({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    Bonfire.create(bonfires, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('bonfires');
});

Courseware.remove({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    Courseware.create(coursewares, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('coursewares');
});

Story.remove({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    Story.create(stories, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('stories');
});