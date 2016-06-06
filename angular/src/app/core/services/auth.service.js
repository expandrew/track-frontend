(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService ($http, $q, $rootScope, API_HOST, AUTH_EVENTS, Session) {

      return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser,
        isAuthenticated: isAuthenticated,
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

      function getCurrentUser () {

        return $q(function(resolve, reject) {

          if (Session.user) {

            resolve(Session.user);
          }

          else {

            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            reject('Not Authenticated');
          }
        });
      }

      function isAuthenticated () {

        return !!Session.user;
      }
    }
  })();