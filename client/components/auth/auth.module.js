'use strict';

angular.module('eventAppApp.auth', ['eventAppApp.constants', 'eventAppApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
