/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name meanstackApp
 * @description
 * # meanstackApp
 *
 * Main module of the application.
 */
var app = angular
  .module('meanstackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
 