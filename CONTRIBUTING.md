# Contributor's Guide

We welcome pull requests from freeCodeCamp campers (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1. Find an issue that needs assistance by searching for the [Help Wanted](https://github.com/freeCodeCamp/freeCodeCamp/labels/help%20wanted) tag.

2. Let us know you are working on it by posting a comment on the issue.

3. Follow the instructions in this guide to start working on the issue.

Remember to feel free to ask for help in our [Contributors](https://gitter.im/FreeCodeCamp/Contributors) Gitter room.

Working on your first Pull Request? You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

###### If you've found a bug that is not on the board, [follow these steps](README.md#found-a-bug).

--------------------------------------------------------------------------------
## Quick Reference

|command|description|
|---|---|
| `npm run test` |  run all JS tests in the system, including client, server, lint and challenge tests |
| `npm run test-challenges` | run all challenge tests (for each challenge JSON file, run all `tests` against all `solutions`) |
| `npm run seed` <br>&nbsp;&nbsp;(<small>or</small> `node seed/index.js`) | parses all the challenge JSON files and saves them into MongoDB (code is inside [seed/index.js](seed/index.js)) |
| `npm run commit` | interactive tool to help you build a good commit message |
| `npm run unpack` | extract challenges from `seed/challenges` into `unpacked` subdirectory, one HTML page per challenge - see [Unpack and Repack](#unpack-and-repack) |
| `npm run repack` | repack challenges from `unpacked` subdirectory into `seed/challenges` |

## Table of Contents

### [Setup](#setup)
- [Prerequisites](#prerequisites)
- [Forking the Project](#forking-the-project)
- [Create a Branch](#create-a-branch)
- [Set Up Linting](#set-up-linting)
- [Set Up MailHog](#set-up-mailhog)
- [Set Up freeCodeCamp](#set-up-freecodecamp)

### [Make Changes](#make-changes)
- [Unpack and Repack](#unpack-and-repack)
- [Challenge Template](#challenge-template)
- [Run The Test Suite](#run-the-test-suite)

### Submit
- [Creating a Pull Request](#creating-a-pull-request)
- [Common Steps](#common-steps)
- [How We Review and Merge Pull Requests](#how-we-review-and-merge-pull-requests)
- [How We Close Stale Issues](#how-we-close-stale-issues)
- [Next Steps](#next-steps)
- [Other Resources](#other-resources)

## Setup
### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `~ ^3`  |
| [MailHog](https://github.com/mailhog/MailHog) | `~ ^1` |
| [Node.js](http://nodejs.org)                | `~ ^8.9.3`  |
| npm (comes with Node)                       | `~ ^5`  |

> _Updating to the latest releases is recommended_.

If Node.js or MongoDB is already installed on your machine, run the following commands to validate the versions:

```shell
node -v
mongo --version
```

To check your MongoDB version on Windows, you have to locate the installation directory. It is probably located at something like `C:\Program Files\MongoDB\Server\3.4\` where 3.4 is your version number.

If your versions are lower than the prerequisite versions, you should update.

Platform-specific guides to setting up a development environment:

- [How to clone and setup the freeCodeCamp website on a Windows pc](https://forum.freecodecamp.org/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)
- [How to Clone and Setup the freeCodeCamp Website on a Mac](https://forum.freecodecamp.org/t/how-to-clone-and-setup-the-freecodecamp-website-on-a-mac/78450)

### Forking the Project

#### Setting Up Your System

1. Install [Git](https://git-scm.com/) or your favorite Git client.
2. (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

#### Forking freeCodeCamp

1. Go to the top level freeCodeCamp repository: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository (repo) has been forked, you will be taken to your copy of the freeCodeCamp repo at <https://github.com/yourUsername/freeCodeCamp>

#### Cloning Your Fork

1. Open a Terminal / Command Line / Bash Shell in your projects directory (_i.e.: `/yourprojectdirectory/`_)
2. Clone your fork of freeCodeCamp

```shell
$ git clone https://github.com/yourUsername/freeCodeCamp.git
```

**(make sure to replace `yourUsername` with your GitHub username)**

This will download the entire freeCodeCamp repo to your projects directory.

#### Setup Your Upstream

1. Change directory to the new freeCodeCamp directory (`cd freeCodeCamp`)
2. Add a remote to the official freeCodeCamp repo:

```shell
$ git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
```

Congratulations, you now have a local copy of the freeCodeCamp repo!

#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

##### Rebasing from Upstream

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `staging` branch

```shell
$ git status
On branch staging
Your branch is up-to-date with 'origin/staging'.
```

If your aren't on `staging`, resolve outstanding files / commits and checkout the `staging` branch

```shell
$ git checkout staging
```

2. Do a pull with rebase against `upstream`

```shell
$ git pull --rebase upstream staging
```

This will pull down all of the changes to the official staging branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated staging branch to your GitHub fork

```shell
$ git push origin staging --force
```

This will overwrite the staging branch of your fork.

### Create a Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

#### Naming Your Branch

Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `fix/email-login` would be a branch where you fix something specific to email login.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

and to push to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

**If you need more help with branching, take a look at [this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).**

### Set Up Linting

You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) (you can find a summary of those rules [here](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/.eslintrc)).

> Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base.

### Set Up MailHog

To be able to create a user and log into your development copy, you need to set up MailHog. MailHog is a local SMTP mail server that will catch the emails your freeCodeCamp instance is sending. How you install and run MailHog is dependent upon your OS.

- [MacOS](#macos)
- [Windows](#windows)
- [Linux](#linux)
- [Using MailHog](#using-mailhog)

#### macOS

Here is how to set up MailHog on macOS with [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

#### Windows

Download the latest MailHog version from [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Click on the link for your Windows version (32 or 64 bit) and .exe file will be downloaded to your computer.

Once it finishes downloading, click on the file. You will probably get a Windows firewall notification where you will have to allow access to MailHog. Once you do, a standard Windows command line prompt will open with MailHog already running.

To close MailHog, close the command prompt. To run it again, click on the same .exe file. You don't need to download a new one.

#### Linux

First install Go.

For Debian-based systems like Ubuntu and Linux Mint, run:

```bash
sudo apt-get install golang
```

For CentOS, Fedora, Red Hat Linux, and other RPM-based systems, run:

```bash
sudo dnf install golang
```

Or:

```bash
sudo yum install golang
```

Set the path for Go:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Then install and run MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

#### Using MailHog

Once you have installed MailHog and started it running you need to open your MailHog inbox in your browser, open a new tab or window and navigate to [http://localhost:8025](http://localhost:8025).
You should now see a screen like below:

![MailHog Screenshot 1](docs/images/1.jpg)

When your freeCodeCamp installation sends an email you will see it appear here. Like below:

![MailHog Screenshot 2](docs/images/2.jpg)

Open the mail and you should see two tabs where you can view the content - plain text and source. Make sure you are on the plain text tab.

![MailHog Screenshot 3](docs/images/3.jpg)

Any links in the email should be clickable.

For any other questions related to MailHog or for instructions on custom configurations, check out the [MailHog](https://github.com/mailhog/MailHog) repository.

### Set Up freeCodeCamp

Once you have freeCodeCamp cloned, before you start the application, you first need to install all of the dependencies:

```bash
# Install NPM dependencies
npm install
```

Then you need to add the private environment variables (API Keys):

```bash
# Create a copy of the "sample.env" and name it as ".env".
# Populate it with the necessary API keys and secrets:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

Then edit the `.env` file and modify the API keys only for services that you will use.

Note: Not all keys are required, to run the app locally, however `MONGOHQ_URL` is the most important one. Unless you have MongoDB running in a setup different than the defaults, the URL in the sample.env should work fine.

You can leave the other keys as they are. Keep in mind if you want to use more services you'll have to get your own API keys for those services and edit those entries accordingly in the .env file.

Now you will need to start MongoDB, and then seed the database, then you can start the application:

```bash
# Start the mongo server in a separate terminal
# On OS X:
mongod

# If you are using Windows, you have to instead specify the full path to the mongod binary
# Make sure to replace 3.4 with the version you have installed
"C:\Program Files\MongoDB\Server\3.4\bin\mongod"

# Initialize freeCodeCamp
# This will seed the database for the first time.
# This command should only be run once.
npm run only-once

# Start the application without a backend server
cd ./client && npm run develop

# If you require the backend server to be operational (persisted user interations/api calls)
# Use this command instead
# Note: This command requires that you have a correctly seeded mongodb instance running
# Note: If you are runnoing the backend server inside a docker container, use the command above
node develop-client-server.js

```

Now navigate to your browser and open <http://localhost:8000>. If the app loads, congratulations – you're all set.

Otherwise, let us know by asking in the [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) on Gitter. There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem.

If the app launches but you are encountering errors with the UI itself, for example if fonts are not being loaded or if the code editor is not displaying properly, you may try the following:

```bash
# Remove all installed node modules
rm -rf node_modules

# Reinstall npm packages
npm install

# Seed the database
node seed

# Re-start the application
npm run develop
```

### Setup freeCodeCamp using Docker
#### Isolated
Use this if you just want to work on freeCodeCamp.

You will need to have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed before executing the commands below.

Setup:

```bash
docker-compose run --rm freecodecamp npm install
docker-compose run --rm freecodecamp npm run only-once
```

Run:

```bash
docker-compose up
```

#### Shared
Use this if you want to work on other services that will run alongside
of freeCodeCamp, using the  database directly. An example is the [open-api](https://github.com/freeCodeCamp/open-api) project.

```bash
docker-compose -f docker-compose.yml -f docker-compose-shared.yml up
```

### Creating a New User
To create a new user, you will need to perform the following steps:

- run MailHog if you haven't set up yet check [set-up-mailhog](#set-up-mailhog)
- run `npm run develop` and navigated to [http://localhost:8000](http://localhost:8000/)
- Click over the Sign-Up link situated on the right corner of the navigation bar.
- Write your email over the input and press the button "get a sign in link" this will send an email with the login URL into MailHog.
- The last step is to check your inbox in MailHog for a new email from "team@freecodecamp.org" click over the URL inside of it you will be redirected and logged in into the app.

### Make Changes

This bit is up to you!

#### How to find the code in the freeCodeCamp codebase to fix/edit

The best way to find out any code you wish to change/add or remove is using
the GitHub search bar at the top of the repository page. For example, you could
search for a challenge name and the results will display all the files along
with line numbers. Then you can proceed to the files and verify this is the area
that you were looking forward to edit. Always feel free to reach out to the chat
room when you are not certain of any thing specific in the code.

### Run The Test Suite

When you're ready to share your code, run the test suite:

```shell
$ npm test
```

and ensure all tests pass.

### Creating a Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the freeCodeCamp
repo (or any repo, for that matter). You will make changes to copies of the
files which make up freeCodeCamp in a personal fork, then apply to have them
accepted by freeCodeCamp proper.

#### Need Help?

freeCodeCamp Issue Mods and staff are on hand to assist with Pull Request
related issues in our [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors).

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER**
make edits to the `staging` branch. ALWAYS make a new branch BEFORE you edit
files. This is critical, because if your PR is not accepted, your copy of
staging will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

There are two methods of creating a pull request for freeCodeCamp:

- Editing files on a local clone (recommended)
- Editing files via the GitHub Interface

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about [How to Setup and Maintain a Local
Instance of freeCodeCamp](#maintaining-your-fork).

1. Perform the maintenance step of rebasing `staging`.
2. Ensure you are on the `staging` branch using `git status`:

        $ git status
        On branch staging
        Your branch is up-to-date with 'origin/staging'.

        nothing to commit, working directory clean

3. If you are not on staging or your working directory is not clean, resolve
    any outstanding files/commits and checkout staging `git checkout staging`

4. Create a branch off of `staging` with git: `git checkout -B
    branch/name-here` **Note:** Branch naming is important. Use a name like
    `fix/short-fix-description` or `feature/short-feature-description`.

5. Edit your file(s) locally with the editor of your choice.

6. Check your `git status` to see unstaged files.

7. Add your edited files: `git add path/to/filename.ext` You can also do: `git
    add .` to add all unstaged files. Take care, though, because you can
    accidentally add files you don't want added. Review your `git status` first.

8. Commit your edits: We have a [tool](https://commitizen.github.io/cz-cli/)
    that helps you to make standard commit messages. Execute `npm run commit`
    and follow the steps.

9. [Squash your commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.

10. If you would want to add/remove changes to previous commit, add the files as in Step 5 earlier,
    and use `git commit --amend` or `git commit --amend --no-edit` (for keeping the same commit message).

11. Push your commits to your GitHub Fork: `git push origin branch/name-here`

12. Go to [Common Steps](#common-steps)

##### Method 2: Editing via the GitHub Interface

Note: Editing via the GitHub Interface is not recommended, since it is not
possible to update your fork via GitHub's interface without deleting and
recreating your fork.

Read the [Wiki
article](http://forum.freecodecamp.org/t/how-to-make-a-pull-request-on-free-code-camp/19114)
for further information

### Common Steps

1. Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2. By default, all pull requests should be against the freeCodeCamp main repo, `staging`
    branch.
    **Make sure that your Base Fork is set to freeCodeCamp/freeCodeCamp when raising a Pull Request.**

    ![fork-instructions](./docs/images/fork-instructions.png)

3. Submit a [pull
    request](http://forum.freecodecamp.org/t/how-to-contribute-via-a-pull-request/19368)
    from your branch to freeCodeCamp's `staging` branch.

4. In the body of your PR include a more detailed summary of the changes you
    made and why.

    - If the PR is meant to fix an existing bug/issue then, at the end of
      your PR's description, append the keyword `closes` and #xxxx (where xxxx
      is the issue number). Example: `closes #1337`. This tells GitHub to
      close the existing issue, if the PR is merged.

5. Indicate if you have tested on a local copy of the site or not.

### How We Review and Merge Pull Requests

freeCodeCamp has a team of volunteer Issue Moderators. These Issue Moderators routinely go through open pull requests in a process called [Quality Assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA).

1. If an Issue Moderator QA's a pull request and confirms that the new code does what it is supposed without seeming to introduce any new bugs, they will comment "LGTM" which means "Looks good to me."

2. Another Issue Moderator will QA the same pull request. Once they have also confirmed that the new code does what it is supposed to without seeming to introduce any new bugs, they will merge the pull request.

If you would like to apply to join our Issue Moderator team, message [@quincylarson](https://gitter.im/quincylarson) with links to 5 of your pull requests that have been accepted and 5 issues where you have helped someone else through commenting or QA'ing.

### How We Close Stale Issues

We will close any issues or pull requests that have been inactive for more than 15 days, except those that match the following criteria:

- bugs that are confirmed
- pull requests that are waiting on other pull requests to be merged
- features that are a part of a GitHub project

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need
to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

### Other Resources

- Bugs and Issues:

  - [Searching for Your Issue on GitHub](http://forum.freecodecamp.org/t/searching-for-existing-issues/19139)

  - [Creating a New GitHub Issue](http://forum.freecodecamp.org/t/creating-a-new-github-issue/18392)

  - [Select Issues for Contributing Using Labels](http://forum.freecodecamp.org/t/free-code-camp-issue-labels/19556)

- Miscellaneous:

  - [How to clone the freeCodeCamp website on a Windows PC](http://forum.freecodecamp.org/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)

  - [How to log in to your local freeCodeCamp site using GitHub](http://forum.freecodecamp.org/t/how-to-log-in-to-your-local-instance-of-free-code-camp/19552)

  - [Writing great git commit messages](http://forum.freecodecamp.org/t/writing-good-git-commit-messages/13210)

  - [Contributor Chat Support](https://gitter.im/FreeCodeCamp/Contributors)  - for the freeCodeCamp repositories, and running a local instance
