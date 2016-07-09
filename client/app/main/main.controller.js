'use strict';

(function() {

  class MainController {
    constructor() {

      var ctrl = this;

    }
  }

  angular.module('eventApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
