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
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
    }
  }

})();
