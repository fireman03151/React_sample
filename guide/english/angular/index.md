---
title: Angular
---

![angular logo](https://angular.io/assets/images/logos/angular/angular.png)

## Angular

Angular (versions 2 and up) is a TypeScript based open source framework to develop frontend web applications. It is the successor of AngularJS and all mentions of Angular refer to versions 2 and up. Please see the separate AngularJS category for its respective guides. Angular has features like generics, static-typing, and also some ES6 features.

## Version History

Google released the initial version of AngularJS on October 20, 2010. The stable release of AngularJS was on December 18, 2017, of version 1.6.8. The last significant release of AngularJS, version 1.7, took place on July 1, 2018, and is currently in a 3 year Long Term Support period. Angular 2.0 was first announced on September 22, 2014, at the ng-Europe conference. One new feature of Angular 2.0 is dynamic loading, and most of the core functionality was moved to modules.

After some modifications, Angular 4.0 was released in December 2016. Angular 4 is backwards compatible with Angular 2.0, and some new features are the HttpClient library and new router life cycle events. Angular 5 released on November 1, 2017, a major feature of which is support for progressive web apps. Angular 6 was released in May 2018, and Angular 7 in October 2018. The latest stable version is [7.0.0](https://angular.io/guide/releases).

## Installation

The easiest way to install Angular is through [Angular CLI](https://cli.angular.io/). This tool allows the creation of new projects and generating components, services, modules, and so on, to a standard the Angular team consider to be best practices.

### Angular 2.x and Up

#### Install Angular CLI
```shell
npm install -g @angular/cli
```

#### Create a Workspace and Initial Application
You develop apps in the context of an Angular workspace. A workspace contains the files for one or more projects. A project is the set of files that comprise an app, a library, or end-to-end (e2e) tests.
```shell
ng new my-app
```

#### Serve the Application
Angular includes a server so that you can easily build and serve your app locally.
  1. Navigate to the workspace folder (`my-app`)
  2. Launch the server by using the CLI command `ng serve` with the `--open` option
```shell
cd my-app
ng serve --open
```

Hooray, you created your first angular app!!!

For more information, refer to the official docs for [Angular](https://angular.io/docs) or [Angular CLI](https://cli.angular.io/).
