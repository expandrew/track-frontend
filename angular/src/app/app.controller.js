(function() {
  'use strict';

  angular
    .module('track-angular')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($scope, $state, AUTH_EVENTS) {
    var vm = this;

    // Redirect when not authenticated
    $scope.$on(AUTH_EVENTS.notAuthenticated, redirectToLogin);

    function redirectToLogin () {

      $state.go('login');
    }
  }
})();