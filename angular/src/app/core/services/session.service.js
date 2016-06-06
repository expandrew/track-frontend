(function() {
  'use strict';

  angular
    .module('track-angular')
    .service('Session', Session);

    /** @ngInject */
    function Session ($localStorage) {

      // Create Session
      this.create = function createSession (token, user) {

        this.token = token;
        this.user = user;

        // Store token in localStorage
        $localStorage.trackToken = token;

        return this;
      };

      // Destroy Session
      this.destroy = function destroySession () {

        this.token = null;
        this.user = null;

        // Remove token from localStorage
        $localStorage.trackToken = null;

        return this;
      };
    }
  })();