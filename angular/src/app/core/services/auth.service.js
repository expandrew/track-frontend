(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService ($http, $q, $rootScope, API_HOST, Session) {

      return {
        login: login,
        logout: logout,
      };

      function login (credentials) {

        return $http({
          method: 'POST',
          url: API_HOST + '/auth/token/',
          data: credentials
        });
      }

      function logout () {

        return $q(function (resolve) {

          resolve(Session.destroy());
        });
      }
    }
  })();