(function() {
  'use strict';

  angular
    .module('track-angular')
    .service('Session', Session);

    /** @ngInject */
    function Session () {

      // Create Session
      this.create = function createSession (token, user) {

        this.token = token;
        this.user = user;

        return this;
      };

      // Destroy Session
      this.destroy = function destroySession () {

        this.token = null;
        this.user = null;

        return this;
      };
    }
  })();