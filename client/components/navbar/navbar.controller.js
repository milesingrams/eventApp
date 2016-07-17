'use strict';

class NavbarController {
  constructor (Auth) {

    let ctrl = this;
    ctrl.isLoggedIn = Auth.isLoggedIn;
    ctrl.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('eventApp')
  .controller('NavbarController', NavbarController);
