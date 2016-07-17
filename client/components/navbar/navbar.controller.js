'use strict';

class NavbarController {
  constructor ($state, Auth) {

    let ctrl = this;
    ctrl.isLoggedIn = Auth.isLoggedIn;
    ctrl.getCurrentUser = Auth.getCurrentUser;


    ctrl.logout = function () {
      Auth.logout();
      $state.go('main.welcome');
    };
  }
}

angular.module('eventApp')
  .controller('NavbarController', NavbarController);
