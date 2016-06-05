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
    function NavbarController(Session) {
      var vm = this;

      vm.Session = Session;
    }
  }

})();
