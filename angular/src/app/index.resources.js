(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('Item', function($resource) {

      return $resource('//localhost:5000/api/v1/items/:id');
    })

    .factory('User', function($resource) {

      return $resource('//localhost:5000/api/v1/users/:id');
    });

})();
