(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService ($rootScope, $http, apiHost) {

      return {
        login: login,
      };

      function login (credentials) {

        return $http({
          method: 'POST',
          url: apiHost + '/auth/token/',
          data: credentials
        });
      }
    }
  })();