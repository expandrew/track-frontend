(function() {
  'use strict';

  angular
    .module('track-angular')
    .directive('trackNavbar', trackNavbar);

  /** @ngInject */
  function trackNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state, AuthService, Session, toastr) {
      var vm = this;

      vm.toggle = toggle;
      vm.collapse = collapse;
      vm.logout = logout;

      // Proxy Session to view
      vm.Session = Session;

      // Set initial values
      vm.collapsed = true;


      // Responsive Toggle Functions
      function toggle () { vm.collapsed = !vm.collapsed; }
      function collapse () { vm.collapsed = true; }

      // Logout Function
      function logout () {

        AuthService.logout()
        .then(navbarLogoutSuccess)
        .catch(navbarLogoutError);

        function navbarLogoutSuccess () {

          // Broadcast Event
          $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);

          // Redirect
          $state.go('login');
        }

        function navbarLogoutError (error) {

          toastr.error(JSON.stringify(error), 'navbarLogoutError');
        }
      }
    }
  }

})();
