'use strict';

angular.module('eventApp.auth', ['eventApp.constants', 'eventApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
