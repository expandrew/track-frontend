(function() {
  'use strict';

  angular
    .module('track-angular')
    .service('apiInterceptor', apiInterceptor);

    /** @ngInject */
    function apiInterceptor ($q, $rootScope, Session, AUTH_EVENTS) {

      return {
        request: request,
        responseError: responseError
      };

      function request (config) {

        // Set Authorization Header with Token
        config.headers['Authorization'] = (Session.token) ? 'JWT ' + Session.token : undefined;

        return config;

        // FIXME: Write function for refreshing token - currently tokens are only valid for 300s after issue
      }

      function responseError (response) {

        switch (response.status) {

          // Not Authenticated
          case 401, 403:

            Session.destroy();

            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            break;
        }

        return $q.reject(response);
      };
    }
  })();