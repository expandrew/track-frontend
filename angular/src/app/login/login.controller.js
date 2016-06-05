(function() {
  'use strict';

  angular
    .module('track-angular')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state, AuthService, Session, toastr) {
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

        // Create Session
        Session.create(token);

        // Show Success
        toastr.success('Logged In');

        // Redirect
        $state.go('home');
      }

      function loginSubmitError (error) {

        // Show Error
        toastr.error(JSON.stringify(error.data), 'Error');
      }
    }

  }
})();
