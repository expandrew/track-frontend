(function() {
  'use strict';

  angular
    .module('track-angular')
    .run(runBlock);

  /** @ngInject */
  function runBlock(AuthService) {

    // Get Current User
    AuthService.getCurrentUser();
  }

})();
