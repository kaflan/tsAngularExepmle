/// <reference path="../../typings/angularjs/angular.d.ts" />
import * as angular from 'angular';
import 'normalize.css';
export default angular.module('app', [
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
