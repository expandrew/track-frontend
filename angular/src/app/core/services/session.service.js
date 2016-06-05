(function() {
  'use strict';

  angular
    .module('track-angular')
    .service('Session', Session);

    /** @ngInject */
    function Session () {

      // Create Session
      this.create = function createSession (token) {

        this.token = token;

        return this;
      };

      // Destroy Session
      this.destroy = function destroySession () {

        this.token = null;

        return this;
      };
    }
  })();