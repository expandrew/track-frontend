(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService ($http, $localStorage, $q, $rootScope, API_HOST, AUTH_EVENTS, jwtHelper, Session) {

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

          else if (!!$localStorage.trackToken) {

            // Get token
            var token = $localStorage.trackToken;

            // Get user info from token
            var tokenPayload = jwtHelper.decodeToken(token);

            // Make user object
            var user = {
              id: tokenPayload.user_id,
              username: tokenPayload.username
            };

            // Create Session
            Session.create(token, user);

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