'use strict';

(function() {

  class WelcomeController {
    constructor($state) {

      var ctrl = this;

      ctrl.goRegister = function () {
        $state.go('main.register');
      }

    }
  }

  angular.module('eventApp')
    .component('welcome', {
      templateUrl: 'app/main/welcome/welcome.html',
      controller: WelcomeController,
      controllerAs: 'welcomeCtrl'
    });
})();
