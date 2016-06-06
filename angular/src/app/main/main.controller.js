(function() {
  'use strict';

  angular
    .module('track-angular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Item) {
    var vm = this;

    // Call API
    vm.items = Item.query();
  }
})();
