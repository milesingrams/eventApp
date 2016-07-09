'use strict';

(function() {

  class MainController {
    constructor($http, $scope) {

      var ctrl = this;

      ctrl.signInToggled = false;
    }
  }

  angular.module('eventAppApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
