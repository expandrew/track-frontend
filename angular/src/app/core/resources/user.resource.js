(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('User', function($resource, API_HOST) {

      return $resource(API_HOST + '/users/:id');
    });

})();
