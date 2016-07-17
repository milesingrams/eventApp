'use strict';

angular.module('eventApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('events', {
      url: '/events',
      template: '<events></events>'
    })
    .state('eventsCreate', {
      url: '/events/create',
      template: '<events-edit></events-edit>'
    })
    .state('eventsEdit', {
      url: '/events/edit/:eventId',
      template: '<events-edit></events-edit>'
    });
  });
