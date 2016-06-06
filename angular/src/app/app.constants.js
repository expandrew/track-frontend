/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('track-angular')
    .constant('moment', moment)
    .constant('API_HOST', 'http://10.0.1.2:5000/api/v1')

})();
