'use strict';

(function() {

  class WelcomeController {
    constructor($state) {

      let ctrl = this;
      ctrl.go = $state.go;

    }
  }

  angular.module('eventApp')
    .component('welcome', {
      templateUrl: 'app/main/welcome/welcome.html',
      controller: WelcomeController,
      controllerAs: 'welcomeCtrl'
    });
})();
