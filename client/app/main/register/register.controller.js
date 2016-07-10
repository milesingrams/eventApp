'use strict';

(function() {

  class RegisterController {
    constructor($http, $state, Auth) {

      var ctrl = this;

      ctrl.email = '';
      ctrl.password = '';
      ctrl.name = '';
      ctrl.userExists = true;
      ctrl.submitted = false;
      ctrl.errorMessage = null;

      ctrl.goWelcome = function () {
        $state.go('main.welcome');
      };

      ctrl.checkEmail = function () {
        if (ctrl.email) {
          $http.get('/api/utils/checkEmail', {params: {email: ctrl.email}}).success(response => {
            ctrl.userExists = response;
          });
        }
      };

      ctrl.isEmpty = function (object) {
        return Object.keys(object).length === 0;
      };

      ctrl.go = function (form) {
        ctrl.submitted = true;

        if (ctrl.userExists) {
          if (form.$valid) {
            Auth.login({
              email: ctrl.email,
              password: ctrl.password
            })
            .then(() => {
              $state.go('main.welcome');
            })
            .catch(err => {
              ctrl.errorMessage = err.message;
            });
          }
        } else {
          if (form.$valid) {
            Auth.createUser({
              name: ctrl.name,
              email: ctrl.email,
              password: ctrl.password
            })
            .then(() => {
              $state.go('main.welcome');
            })
            .catch(err => {
              ctrl.errorMessage = err.message;
            });
          }
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
