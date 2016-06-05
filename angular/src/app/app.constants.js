/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('track-angular')
    .constant('moment', moment)
    .constant('apiHost', 'http://localhost:5000/api/v1');

})();
