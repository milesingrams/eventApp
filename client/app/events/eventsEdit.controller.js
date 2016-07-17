'use strict';

(function() {

class EventsEditComponent {
  constructor($http, $state) {

    let ctrl = this;

    ctrl.eventObj = null;

    // Performed on page load
    let init = function () {
      if ($state.current.name === 'eventsEdit') {
        // If editing load relevant database entry
        $http.get('/api/events/' + $stateParams.eventId).then(response => {
          ctrl.eventObj = response.data;
        });

      } else {

        ctrl.eventObj = {
          name: 'New Event',
          description: '',
          dates: {},
          invited: {},
          photoUrl: null,
          location: "New York",
          details: ''
        };
      }
    };

    init();

  }
}

angular.module('eventApp')
  .component('eventsEdit', {
    templateUrl: 'app/events/eventsEdit.html',
    controller: EventsEditComponent
  });

})();
