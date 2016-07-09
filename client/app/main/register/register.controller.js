'use strict';

(function() {

  class RegisterController {
    constructor($http, $state) {

      var ctrl = this;

      ctrl.email = '';
      ctrl.password = '';
      ctrl.name = '';
      ctrl.userExists = true;

      ctrl.goWelcome = function () {
        $state.go('main.welcome');
      }

      ctrl.checkEmail = function () {
        if (ctrl.email) {
          $http.get('/api/utils/checkEmail', {params: {email: ctrl.email}}).success(response => {
            ctrl.userExists = response;
          });
        }
      };

    }
  }

  angular.module('eventApp')
    .component('register', {
      templateUrl: 'app/main/register/register.html',
      controller: RegisterController,
      controllerAs: 'registerCtrl'
    });
})();
