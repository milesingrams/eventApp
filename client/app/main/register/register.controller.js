'use strict';

(function() {

  class RegisterController {
    constructor($state) {

      var ctrl = this;

      ctrl.goWelcome = function () {
        $state.go('main.welcome');
      }

    }
  }

  angular.module('eventApp')
    .component('register', {
      templateUrl: 'app/main/register/register.html',
      controller: RegisterController,
      controllerAs: 'registerCtrl'
    });
})();
