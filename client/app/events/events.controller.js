'use strict';

(function() {

class EventsComponent {
  constructor() {

    let ctrl = this;

  }
}

angular.module('eventApp')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent
  });

})();
