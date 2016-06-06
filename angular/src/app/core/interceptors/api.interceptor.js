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