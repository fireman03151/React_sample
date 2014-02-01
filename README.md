![Alt](https://lh4.googleusercontent.com/-PVw-ZUM9vV8/UuWeH51os0I/AAAAAAAAD6M/0Ikg7viJftQ/w1286-h566-no/hackathon-starter-logo.jpg)
Hackathon Starter [![Dependency Status](https://david-dm.org/sahat/hackathon-starter.png?theme=shields.io)](https://david-dm.org/sahat/hackathon-starter)
=================
A boilerplate for **Node.js** web applications.

**Live Demo**: http://hackathonstarter.herokuapp.com :octocat:

If you have attended any hackathons in the past then you know how much time it takes to
get a project started. Decide on an idea, pick a programming language, pick a web framework,
pick a CSS framework. A while later, you will have an initial project up on GitHub, and only then can other team members
start contributing. Or what about doing something as simple as OAuth 2.0 Authentication? You can spend hours
on it if you are not familiar with how OAuth 2.0 works. *(As a side-note, over a year ago
I had no idea WTF REST or OAuth were, or how to do a simple "Sign in with Facebook".
It was a frustrating experience to say the least.)*

When I started this project, my primary focus was on **simplicity** and **ease of use**.
I also tried to make it as **generic** and **reusable** as possible to cover most use cases of hackathon web apps,
without being too specific. In the worst case you can use this as a guide for your projects, if for example you are only
interested in **Sign in with Google** authentication and nothing else.

Chances are, you might not need all 4 types of OAuth 1.0a/OAuth2 authentication methods, or all 9 API examples.
Sadly, there is no step-by-step wizard to configure the boilerplate code just for your use case. So, use what you need, simply delete what you don't need.

<h4 align="center">Flatly Bootstrap Theme</h3>

![Alt](https://lh6.googleusercontent.com/-NikjFtdyOq8/UsCv7URplAI/AAAAAAAADrE/a417u0cZU7Y/w1278-h958-no/Screenshot+2013-12-29+18.27.10.png)

<h4 align="center">Default Theme</h3>

![Alt](https://lh5.googleusercontent.com/-KmlaMLKGCqg/UuWt4MrXzeI/AAAAAAAAD6o/KUucObo33zU/w1170-h860-no/Screenshot+2014-01-26+19.52.03.png)

Features
--------
- **Local Authentication** using Email and Password
- **OAuth 1.0a Authentication** via Twitter
- **OAuth 2.0 Authentication** via Facebook, Google or GitHub
- Awesome flash notifications with animations by [animate.css](http://daneden.github.io/animate.css/)
- MVC Project Structure
- Node.js clusters support
- LESS stylesheets (auto-compiled via Express middleware)
- Bootstrap 3 + Flat UI + iOS7 Theme
- Contact Form (powered by Sendgrid)
- **Account Management**
 - Profile Details
 - Change Password
 - Link multiple OAuth strategies to one account
 - Delete Account
- **API Examples**: Facebook, Foursquare, Last.fm, Tumblr, Twitter, PayPal, and more.

Prerequisites
-------------
- MongoDB
- Node.js
- Command Line Tools
 - **Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - **Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - **Ubuntu**: `sudo apt-get install build-essential`
 - **Fedora**: `sudo yum groupinstall "Development Tools"`
 - **OpenSUSE**: `sudo zypper install --type pattern devel_basis`

:exclamation: **Note**: If you are new to Node.js or Express framework,
I highly recommend watching [Node.js and Express 101](http://www.youtube.com/watch?v=BN0JlMZCtNU) screencast that teaches Node and Express from scratch.


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:sahat/hackathon-starter.git my-project

cd my-project

# Install NPM dependencies
npm install

node app.js
```

>:exclamation: **Note**: I strongly recommend installing nodemon `sudo npm install -g nodemon`.
>It will monitor for any changes in your node.js
>application and automatically restart the server. Once installed, instead of `node app.js` use `nodemon app.js`.
>It is a big time saver in the long run.

Next up, if you want to use any of the APIs or OAuth authentication methods, you will need to obtain
appropriate credentials: Client ID, Client Secret, API Key, or Username & Password. You will
need to go through each provider to generate new credentials.

Obtaining API Keys
------------------

<img src="http://images.google.com/intl/en_ALL/images/srpr/logo6w.png" width="200">
- Visit [Google Cloud Console](https://cloud.google.com/console/project)
- Click **CREATE PROJECT** button
- Enter *Project Name*, then click **CREATE**
- Then select *APIs & auth* from the sidebar and click on *Credentials* tab
- Click **CREATE NEW CLIENT ID** button
 - **Application Type**: Web Application
 - **Authorized Javascript origins**: http://localhost:3000
 - **Authorized redirect URI**: http://localhost:3000/auth/google/callback
- Copy and paste *Client ID* and *Client secret* keys into `config/secrets.js`

>:exclamation: **Note**: When you ready to deploy to production don't forget to add
>    your new url to Authorized Javascript origins and Authorized redirect URI,
>   e.g. `http://my-awesome-app.herokuapp.com` and `http://my-awesome-app.herokuapp.com/auth/google/callback` respectively.

<hr>

<img src="http://www.doit.ba/img/facebook.jpg" width="200">
- Visit [Facebook Developers](https://developers.facebook.com/)
- Click **Apps > Create a New App** in the navigation bar
- Enter *Display Name*, then choose a category, then click **Create app**
- Copy and paste *App ID* and *App Secret* keys into `config/secrets.js`
 - *App ID* is **clientID**, *App Secret* is **clientSecret**
- Click on *Settings* on the sidebar, then click **+ Add Platform**
- Select **Website**
- Enter `http://localhost:3000` for *Site URL*

<hr>

<img src="https://github.global.ssl.fastly.net/images/modules/logos_page/GitHub-Logo.png" width="200">
- Go to [Account Settings](https://github.com/settings/profile)
- Select **Applications** from the sidebar
- Then inside **Developer applications** click on **Register new application**
- Enter *Application Name* and *Homepage URL*.
- For *Authorization Callback URL*: http://localhost:3000/auth/github/callback
- Click **Register application**
- Now copy and paste *Client ID* and *Client Secret* keys into `config/secrets.js`

<hr>

<img src="https://g.twimg.com/Twitter_logo_blue.png" width="100">
- Sign in at [https://dev.twitter.com](https://dev.twitter.com/)
- From the profile picture dropdown menu select **My Applications**
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: http://127.0.0.1:3000/auth/twitter/callback
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**

<hr>

<img src="https://www.paypalobjects.com/webstatic/developer/logo_paypal-developer_beta.png" width="200">
- Visit [PayPal Developer](https://developer.paypal.com/)
- Log in using your existing PayPal account
- Click **Applications > Create App** in the navigation bar
- Enter *Application Name*, then click **Create app**
- Copy and paste *Client ID* and *Secret* keys into `config/secrets.js`
- *App ID* is **client_id**, *App Secret* is **client_secret**
- Change **host** to api.paypal.com if you want to test against production and use the live credentials

Project Structure
-----------------

| Name          | Description   |
| ------------- |:-------------:|
| **config**/passport.js      | Passport Local and OAuth strategies + Passport middleware.         |
| **config**/secrets.js    | Your API keys, tokens, passwords and database URL.                    |
| **controllers**/api.js | Controller for /api route and all api examples.                         |
| **controllers**/contact.js | Controller for contact form.                                        |
| **controllers**/home.js | Controller for home page (index).                                      |
| **controllers**/user.js | Controller for user account management page.                           |
| **models**/User.js | Mongoose schema and model for User.                                         |
| **public/*** | Static assets, i.e. fonts, css, js, img.                                          |
| **public/css**/styles.less | Imports Bootstrap + a theme that overrides default Bootstrap.       |
| **public/css/theme**/default.less | The default styles that were previously inside style.less.   |
| **views/account/*** | Templates relating to user account.                                        |
| **views/api/*** | Templates relating to API Examples.                                            |
| **views/partials**/flash.jade      | Error, info and success notifications.                      |
| **views/partials**/navigation.jade | Navbar partial template.                                    |
| **views/partials**/footer.jade     | Footer partial template.                                    |
| **views**/layout.jade              | Base template.                                              |
| **views**/home.jade                | Home page template.                                         |
| app.js                             | Main application file.                                      |
| cluster_app.js                     | Creates multiple instances of `app.js` via Node.js clusters.|


:exclamation: **Note:** There is no difference how you name or structure your views. You could place all your templates in a top-level `views` directory without having a nested folder structure, if that makes things easier for you. Just don't forget to update `extends ../layout`  and corresponding `res.render()` method in controllers. For smaller apps, I find having a flat folder structure to be easier to work with.

:bangbang: **Note:** Although your main template - **layout.jade** only knows about `/css/styles.css` file, you should be editing **styles.less** stylesheet. Express will automatically generate minified **styles.css** whenever there are changes in LESS file. This is done via [less-middleware](https://github.com/emberfeather/less.js-middleware) node.js library.

Useful Tools
------------
- [Jade Syntax Documentation by Example](http://naltatis.github.io/jade-syntax-docs/#attributes) - Better than official docs.
- [HTML to Jade converter](http://html2jade.aaron-powell.com) - Extremely valuable when you need to quickly copy and paste HTML snippets from the web.

Recommended Design
------------------
- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap.
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/) - It's already part of the Hackathon Starter, so use this page as a reference.
- [Colors](http://clrs.cc) - a nicer color palette for the web.
- [CSS Spinning Loaders](http://codepen.io/andymcfee/pen/ioskA) - spinning loader in CSS.
- [SpinKit](http://tobiasahlin.com/spinkit/) - 8 awesome looking spinning loaders in CSS.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.
- [3D Dropdown Menu](http://soulwire.github.io/Makisu/) - CSS3 3D Dropdown Menu that folds and unfolds.
- [Creative Link Effects](http://tympanus.net/Development/CreativeLinkEffects/) - Beautiful link effects in CSS.
- [Medium Scroll Effect](http://codepen.io/andreasstorm/pen/pyjEh) - Fade in/out header background image as you scroll.
- [HTML5UP](http://html5up.net/) - Beautifully designed HTML templates.

Recommended Node.js Libraries
-----------------------------
- [nodemon](https://github.com/remy/nodemon) - automatically restart node.js server on code change.
- [geoip-lite](https://github.com/bluesmoon/node-geoip) - get geolocation coordinates from IP address.
- [Nodemailer](https://github.com/andris9/Nodemailer) - send emails with node.js (without sendgrid or mailgun).
- [filesize.js](http://filesizejs.com/) - make file size pretty, e.g. `filesize(265318); // "265.32 kB"`.
- [Numeral.js](http://numeraljs.com) - a javascript library for formatting and manipulating numbers.

Recommended Client-Side libraries
---------------------------------
- [Hover](https://github.com/IanLunn/Hover) - Awesome css3 animations on mouse hover.
- [platform.js](https://github.com/bestiejs/platform.js) - Get client's operating system name, version, and other useful information.
- [iCheck](https://github.com/fronteed/iCheck) - Custom nice looking radio and check boxes.
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) - Responsive jQuery Lightbox Plugin.
- [jQuery Raty](http://wbotelhos.com/raty/) - Star Rating Plugin.
- [Headroom.js](http://wicky.nillia.ms/headroom.js/) - Hide your header until you need it.
- [Fotorama](http://fotorama.io) - Very nice jQuery gallery.
- [X-editable](http://vitalets.github.io/x-editable/) - Edit form elements inline.
- [Offline.js](http://github.hubspot.com/offline/docs/welcome/) - Detect when user's internet connection goes offline.
- [Color Thief](https://github.com/lokesh/color-thief) - Grabs the dominant color or a representative color palette from an image.
- [Alertify.js](http://fabien-d.github.io/alertify.js/) - Sweet looking alerts and browser dialogs.
- [select.js](http://github.hubspot.com/select/docs/welcome/) - Styleable select elements.
- [drop.js](http://github.hubspot.com/drop/docs/welcome/) -  Powerful Javascript and CSS library for creating dropdowns and other floating displays.
- [scrollReveal.js](https://github.com/julianlloyd/scrollReveal.js) - Declarative on-scroll reveal animations.

Pro Tips
--------
- When you install a new npm package, add a *--save* flag and it will be automatially
added to `package.json` as well. For example, `npm install moment --save`.
- Use [async.parallel()](https://github.com/caolan/async#parallel) when you neeed to run multiple
asynchronous tasks, and then render a page, but only when all tasks are completed. For example, you might
want to scrape 3 different websites for some data (async operation) and render the results
on a page after all 3 websites have been scraped.

FAQ
---
### What is `cluster_app.js`?
From the [Node.js Documentation](http://nodejs.org/api/cluster.html#cluster_how_it_works):
> A single instance of Node runs in a single thread. To take advantage of multi-core systems
> the user will sometimes want to launch a cluster of Node processes to handle the load.
> The cluster module allows you to easily create child processes that all share server ports.

`cluster_app.js` allows you to take advantage of this feature by forking a process of `app.js`
for each CPU detected. For the majority of applications serving HTTP requests,
this is a resounding boon. However, the cluster module is still in experimental stage, therefore it should only be used after understanding its purpose and behavior. To use it, simply run `node cluster_app.js`. **Its use is entirely optional and `app.js` is not tied in any way to it**. As a reminder, if you plan to use `cluster_app.js` instead of `app.js`, be sure to indicate that in `Procfile` if you are deploying your app to Heroku.

### I am getting MongoDB Connection Error, how do I fix it?
That's a custom error message defined in `app.js` to indicate that there was a connection problem to MongoDB:
```
mongoose.connection.on('error', function() {
  console.log('✗ MongoDB Connection Error. Please make sure MongoDB is running.'.red);
});
```
As the message says, you need to have a MongoDB server running before launching `app.js`. You can get MongoDB from
[mongodb.org/downloads](mongodb.org/downloads), or install it via a package manager
([Homebrew](http://brew.sh/) on Mac, **apt-get** on Ubuntu, **yum** on Fedora, etc.)

### Why Jade and not Handlebars template engine?
When I first started this project I didn't have any experience with Handlebars. Since then I have worked on Ember.js apps and got myself familiar with the Handlebars syntax. While it is true Handlebars is easier, because it looks like good old HTML, I have no regrets picking Jade over Handlebars. First off, it's the default template engine in Express, so someone who has built Express apps in the past already knows it. Secondly, I find `extends` and `block` to be indispensable, which as far as I know, Handlebars does not have out of the box. And lastly, subjectively speaking, Jade looks much cleaner and shorter than Handlebars, or any non-HAML style for that matter.

### Why do you have all routes defined in app.js?
For the sake of simplicity. While there might be a better approach,
such as passing `app` context to each controller as outlined in this
[blog](http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/),
I find such style to be confusing for beginners.
It took me a long time to grasp the concept of `exports` and `module.exports`,
let alone having a global `app` reference in other files.
That to me is a backward thinking.
The `app.js` is the "heart of the app", it should be the one referencing
models, routes, controllers, etc.
When working solo on small projects I actually prefer to have everything inside `app.js` as is the case with [this]((https://github.com/sahat/ember-sass-express-starter/blob/master/app.js))
REST API server.

### I don't need a sticky footer, can I delete it?
Absolutely. But unlike a regular footer there is a bit more work involved. First, delete `#wrap` and `#footer` ID selectors and `html, body { height: 100%; }` from **styles.less**. Next, delete `#wrap` and `#footer` lines from **layout.jade** (By the way, If no element is specified before the class or id, Jade assumes it's a `div` element). Don't forget to indent everything under `#wrap` to the left once, since this project uses two spaces per block indentation.

### Can I use Ember, Angular or Backbone with Hackathon Starter?
It might be possible, but why would you want to?
I specifically avoided client-side MV* frameworks in this project to keep things simple.
There is a big shift in the way you develop apps with Ember, Backbone, Angular
as opposed to server-side frameworks like Express, Flask, Rails, Django. Not only
would you need to know how to use Express in this case, but also the client-side framework of your choice,
which in itself is not a trivial task. And then there is a whole different process
for authentication with single page applications. If you insist on using
a client-side framework, it's best if you use a boilerplate of choice for your particular
client-side framework and just grab the pieces you need from the Hackathon Starter.

### Why is there no "Forgot Password" during login?
I started working on it, but quickly realized it should be library's responsibility. It would
add a lot of extra code to an already hefty boilerplate that people would have to go through.
That's part of the reason. The main reason is I have never built this feature before,
and there is no "one true way" to do it if you search the web. I don't
want to invest a lot of time into it by putting together a quick hack, trying to mimick the way
others have build this feature. Ideally, I wish there was node.js library that integrates
well with *passport-local*, but AFAIK it does not exist yet. Even, [Keystone.JS](http://keystonejs.com/) - a node.js CMS does not have
this feature. I have started working on it, but if it's really that important and you would like to continue
it, check out the [forgot-password](https://github.com/sahat/hackathon-starter/tree/forgot-password) branch. So far it has a template, GET controller to render that template,
POST controller to send an email via Nodemailer.

How it works (mini guide)
-------------------------
This section is intended for giving you a detailed explanation about
how a particular functionality works. Maybe you are just curious about
how it works, or maybe you are lost and confused while reading the code,
I hope it provides some guidance to you.

###:rose: Custom HTML and CSS Design 101
[HTML5 UP](http://html5up.net/) has many beautiful templates that you can download for free, like the ones you see below:
![Alt](http://html5up.net/uploads/previews/6742121165068310.jpg)
![Alt](http://html5up.net/uploads/previews/9257227011867312.jpg)

When you download the ZIP file, it will come with *index.html*, *images*, *css* and *js* folders. So, how do you
integrate it with Hackathon Starter? Hackathon Starter uses Bootstrap CSS framework, but these templates do not.
Trying to use both CSS files at the same time will likely result in undesired effects.

:exclamation: **Note:** Using the custom templates approach, you should understand that you cannot reuse any of the views I have created: layout, home page, api browser, login, signup, account management, contact. Those views were built using Bootstrap grid and styles. You will have to manually update the grid using a different syntax provided in the template. **Having said that, you can mix and match if you want to do so: Use Bootstrap for main app interface, and a custom template for a landing page.** 

Let's start from the beginning. For this example I will use [Escape Velocity](http://html5up.net/escape-velocity/) template:
![Alt](http://html5up.net/uploads/previews/6330653905846315.jpg)

**Note**: For the sake of simplicity I will only consider `index.html`, and skip `left-sidebar.html`,
`no-sidebar.html`, `right-sidebar.html`.

Move all javascript files from `html5up-escape-velocity/js` to `public/js`. Then move all css files from `html5up-escape-velocity/css` to `public/css`. And finally, move all images from `html5up-escape-velocity/images` to `public/images` (You could move it to the existing **img** folder, but then you would have to manually change every `img` reference). Grab the contents of `index.html` and paste it into [HTML To Jade](http://html2jade.aaron-powell.com/).

Create a new file `escape-velocity.jade` and paste the Jade markup there. Change `!!! 5` to `doctype html`. It's a fairly recent
change in **Jade** language, but http://html2jade.aaron-powell.com hasn't caught up to this change yet.

Let's see how it looks. Create a new controller html5up in `controllers/home.js`.

```js
exports.escapeVelocity = function(req, res) {
  res.render('escape-velocity', {
    title: 'Landing Page'
  });
};
```

And then create a route in `app.js`. I placed it right after the index controller:
```js
app.get('/escape-velocity', homeController.escapeVelocity);
```

Restart the server (if you are not using **nodemon**), then you should see the new template at http://localhost:3000/escape-velocity.

I will stop here, but if you would like to use this template as more than just a single page, take a look at how these Jade templates work: `layout.jade` - base template, `index.jade` - home page, `partials/navigation` - Bootstrap navbar, `partials/footer` - Sticky footer. You will have to manually break it apart into smaller pieces. Figure out which part of the template you want to keep the same on all pages - that's your new `layout.jade`. Then, each page that changes, be it `index.jade`, `about.jade`, `contact.jade` will be included in the new `layout.jade` via:

```jade
extends layout

block content
  // your markup goes here
```

This is a lengthy process, I know, and templates you get from outside **HTML5** UP, will have yet another grid system. That's why I chose Bootstrap CSS for the Hackathon Starter. Most peopel are familiar with Bootstrap, it's easy to get started, very extendable. You can also buy a Bootstrap theme and just drop it in into your project and everything looks great without a single change to your markup or CSS class names. However, if you would like to go with a completely custom design, there you have it! 

<hr>

###:bulb: How do flash messages work in this project?
Flash messages allow you to display a message at the end of the request and access
it on next request and only next request. For instance, on a failed login attempt, you would
display an alert with some error message, but as soon as you refresh that page or visit a different
page and come back to the login page, that error message will be gone. It is only displayed once.
This project uses *express-flash* module for flash messages. And that
module is built on top of *connect-flash*, which is what I used in
this project initially. With *express-flash* you don't have to
explicity send a flash message to every view inside `res.render()`.
All flash messages are available in your views via `messages` object by default,
thanks to *express-flash*.

Flash messages have a two-step process. You use `req.flash('errors', { msg: 'Error messages goes here' }`
to create a flash message in your controllers, and then display them in your views:
```jade
if messages.errors
  .alert.alert-danger.animated.fadeIn
    for error in messages.errors
      div= error.msg
```
In the first step, `'errors'` is the name of a flash message, which should match the
name of the property on `messages` object in your views. You place alert messages
inside `if message.errors` because you don't want to show them flash messages are actually present.
The reason why you pass an error like `{ msg: 'Error messages goes here' }` instead
of just a string - `'Error messages goes here'`, is for the sake of consistency.
To clarify that, *express-validator* module which is used for validating and sanitizing user's input,
returns all errors as an array of objects, where each object has a `msg` property with a message
why an error has occured. To keep consistent with that style, you should pass all flash messages
as `{ msg: 'My flash message' }` instead of a string. Otherwise you will just see an alert box
without an error message. That is because, in **partials/flash.jade** template it will try to output
`error.msg` (i.e. `"My flash message".msg`), in other words it will try to call a `msg` method on a *String* object,
which will return *undefined*. Everything I just mentioned about errors, also applies
to "info" and "success" flash messages, and you could even create a new one yourself, such as:

**Data Usage Controller (Example)**
```
req.flash('warning', 'You have exceeded 90% of your data usage');
```

**User Account Page (Example)**
```jade
if messages.warning
  .alert.alert-warning.animated.fadeIn
    for warning in messages.warning
      div= warning.msg
```

`partials/flash.jade` is a partial template that contains how flash messages
are formatted. If you don't like the *fadeIn* animation, try something like
*flipInX* (refer to [animate.css](http://daneden.github.io/animate.css/)), or just
delete `.animated.fadeIn` from alerts if you don't want any animations. Or if you
want to customize your flash messages by displaying ✔ on success flash and ✗ on error
flash, this is the place where you would do all those customizations. Previously, flash
messages were scattered throughout each view that used flash messages
(contact, login, signup, profile), but now, thankfully it is uses a *DRY* approach.

The flash messages partial template is *included* in the `layout.jade`, along with footer and navigation.
```jade
body
  #wrap
    include partials/navigation
    .container
      include partials/flash
      block content
  include partials/footer
```

If you have any further questions about flash messages,
please feel free to open an issue and I will update this mini-guide accordingly,
or send a pull request if you  would like to include something that I missed.

<hr>

###:snowman: How do I create a new page?
A more correct way to be to say "How do I create a route". The main file `app.js` contains all the routes.
Each route has a callback function (aka controller) associated with it. Sometimes you will see 3 or more arguments
to routes. In cases like that, the first argument is still a URL string, the middle arguments
are what's called middleware. Think of middleware as a door. If this door prevents you from
continuing forward, well, you won't get to your callback function (aka controller). One such example is authentication.

```js
app.get('/account', passportConf.isAuthenticated, userController.getAccount);
```

It always goes from left to right. A user visits `/account` page. Then `isAuthenticated` middleware
checks if you are authenticated:

```js
exports.isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};
```

If you are authenticated, you let this visitor pass through your "door" by calling `return next();`. It then proceeds to the
next middleware until it reaches the last argument which is a callback function that usually renders a template,
or responds with a JSON data, if you are building a REST API. But in this example it simply renders a page and nothing more:

```js
exports.getAccount = function(req, res) {
  res.render('account/profile', {
    title: 'Account Management'
  });
};
```

Express.js has `app.get`, `app.post`, `app.put`, `app.del`, but for the most part you will only use the first two.
If you just want to display a page, then use `GET`, if you are submitting a form, sending a file then use `POST`.

Here is a typical workflow of adding new routes to your application. Let's say we are building
a page that lists all books from the database.

**Step 1.** Start by defining a route.
```js
app.get('/books', bookController.getBooks);

```

**Step 2.** Create a new controller file called `book.js`.
```js
/**
 * GET /books
 * List all books.
 */

exports.getBooks = function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
};
```

**Step 3.** Import that controller in `app.js`.
```js
var bookController = require('./controllers/book');
```

**Step 4.** Create `books.jade` template.
```jade
extends layout

block content
  .page-header
    h3 All Books

  ul
    for book in books
      li= book.name
```

That's it! I will say that you could have combined Step 1, 2, 3 as following:

```js
app.get('/books', function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
});
```

Sure, it's simpler, but as soon as you pass 1000 lines of code in `app.js` it becomes a little difficult to navigate the file.
I mean, the whole point of this boilerplate project was to separate concerns, so you could
work with your teammates without running into *MERGE CONFLICTS*. Imagine you have 4 developers
working on a single `app.js`, I promise you it won't be fun resolving merge conflicts all the time.
If you are the only developer then it's fine. But as I said, once it gets up to a certain LoC size, it becomes
difficult to maintain everything in a single file.

That's all there is to it. Express.js is super simple to use.
Most of the time you will be dealing with other APIs to do the real work:
[Mongoose](http://mongoosejs.com/docs/guide.html) for querying the database, socket.io for sending and receiving messages over websockets,
sending emails via [Nodemailer](http://www.nodemailer.com/), form validation using [express-validator](https://github.com/ctavan/express-validator) library,
parsing websites using [Cheerio](https://github.com/MatthewMueller/cheerio), and etc.

<hr>

###:dizzy: How do I use Socket.io with Hackathon Starter?
[Dan Stroot](https://github.com/dstroot) submitted an excellent [pull request](https://github.com/dstroot/hackathon-starter/commit/0a632def1ce8da446709d92812423d337c977d75) that adds a real-time dashboard with socket.io.
And as  much as I'd like to add it to the project, I think it violates one of the main
principles of the Hackathon Starter:
> When I started this project, my primary focus was on simplicity and ease of use.
> I also tried to make it as generic and reusable as possible to cover most use cases of
> hackathon web apps, **without being too specific**.

When I need to use socket.io, I **really** need it, but most of the time - I don't. But more
importantly, websockets support is still experimental on most hosting providers. As of October 2013,
Heroku supports websockets, but not until you opt-in by running this command:

```js
heroku labs:enable websockets -a myapp
```

And what if you are deploying to OpenShift? They do support websockets, but it is currently in a
preview state. So, for OpenShift you would need to change the socket.io connect URI to the following:

```js
var socket = io.connect('http://yoursite-namespace.rhcloud.com:8000');
```

Wait, why is it on port 8000? Who knows, and if I didn't run across this [blog post](http://velin-georgiev-blog.appspot.com/blog/set-up-nodejs-express-socketio-application-using-websockets-on-openshift-by-red-hat/)
I wouldn't even know I had to use port 8000.

I am really glad that Heroku and OpenShift at least
have a websockets support, because many other PaaS providers still do not support it.
Due to the aforementioned issues with websockets, I cannot include socket.io as part of the Hackathon Starter. *For now...*
If you need to use socket.io in your app, please continue reading.

First you need to install socket.io:
```js
npm install socket.io --save
```

Replace `var app = express();` with the following code:

```js
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
```

I like to have the following code organization in `app.js` (from top to bottom): module dependencies,
import controllers, import configs, connect to database, express configuration, routes,
start the server, socket.io stuff. That way I always know where to look for things.

Add the following code at the end of `app.js`:

```js
io.configure(function() {
  io.set('transports', ['websocket']);
});

io.sockets.on('connection', function(socket) {
  socket.emit('greet', { hello: 'Hey, Mr.Client!' });
  socket.on('respond', function(data) {
    console.log(data);
  });
  socket.on('disconnect', function() {
    console.log('Socket disconnected');
  });
});
```

We are done with the server-side business.

You now have a choice - to include your JavaScript code in Jade templates or have all your client-side
JavaScript in a separate file - in `main.js`. I will admit, when I first started out with Node.js and JavaScript in general,
I placed all JavaScript code inside templates because I have access to template variables passed in from Express
right then and there. It's the easiest thing you can do, but also the least efficient and harder to maintain. Since then I
almost never include inline JavaScript inside templates anymore.

But it's also understandable if you want take the easier road.
Most of the time you don't even care about performance during hackathons, you just
want to [*"get shit done"*](http://www.startupvitamins.com/media/products/13/aaron_levie_poster_black.jpg) before the time runs out.
Well, either way, use whichever approach makes more sense to you. At the end of the day,
it's **what** you build that matters, not **how** you build it.

If you want to stick all your JavaScript inside templates, then in `layout.jade` -
your main template file, add this to `head` block.

```jade
script(src='/socket.io/socket.io.js?v=#{cacheBuster}')
script.
    var socket = io.connect(window.location.href);
    socket.on('greet', function (data) {
      console.log(data);
      socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
    });
```

If you want to have JavaScript code separate from templates, move that inline script code into `main.js`,
inside the `$(document).ready()`. Oh, and notice the path of socket.io file, you don't actually
have to have `socket.io.js` file anywhere in your project, it will be generated automatically
at runtime.

And that's it, we are done!

If you want to see a really cool real-time dashboard check out this [live example](http://hackathonstarter.herokuapp.com/dashboard). Refer to the [pull request #23](https://github.com/sahat/hackathon-starter/pull/23/files) to see how it is implemented.

TODO
----
- Pages that require login, should automatically redirect to last attempted URL on successful sign-in.
- Authentication strategies should handles all edge cases below:
 - A user has never used your site before. They have no User model and no Identities either.
 - A user is logged out but they have logged into your site with a provider previously. They are now signing in with the same one again.
 - Just as above but they are now signing in with a different provider.
 - A user is logged in with a provider but they try to login with the same provider again.
 - A user is logged in but they try to login with a different provider.

Contributing
------------
If something is unclear, confusing, or needs to be refactored, please let me know. Pull requests are always welcome, but due to the opinionated nature of this project, I cannot accept every pull request. Please open an issue before submitting a pull request.

License
-------
The MIT License (MIT)

Copyright (c) 2014 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
