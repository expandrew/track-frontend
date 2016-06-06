(function() {
  'use strict';

  angular
    .module('track-angular')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope, $state, AuthService, Session, toastr) {
    var vm = this;

    vm.submit = submit;

    vm.credentials = {
      username: '',
      password: ''
    };

    function submit (credentials) {

      AuthService.login(credentials)
      .then(loginSubmitSuccess)
      .catch(loginSubmitError);

      function loginSubmitSuccess (data) {

        // Get token from data
        var token = data.data.token;
        var user = data.data.user;

        // Create Session
        Session.create(token, user);

        // Show Success
        toastr.success('Logged In');

        // Broadcast Event
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

        // Redirect
        $state.go('home');
      }

      function loginSubmitError (error) {

        // Broadcast Event
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

        // Show Error
        toastr.error(JSON.stringify(error.data), 'Error');
      }
    }

  }
})();
