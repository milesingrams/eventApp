'use strict';

angular.module('eventApp', ['ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'validation.match', 'ngAnimate'
  ])
  .config(function($urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .constant('appConfig', {
  	'userRoles': [
  		'guest',
  		'user',
  		'admin'
  	]
  });
