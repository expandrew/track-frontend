(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('Item', function($resource, API_HOST) {

      return $resource(API_HOST + '/items/:id');
    });

})();
