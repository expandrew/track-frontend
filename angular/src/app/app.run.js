(function() {
  'use strict';

  angular
    .module('track-angular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
