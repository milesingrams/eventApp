'use strict';

angular.module('eventApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        template: '<main></main>'
      })
      .state('main.welcome', {
        url: '',
        template: '<welcome></welcome>'
      })
      .state('main.register', {
        url: 'register',
        template: '<register></register>'
      });
  });
