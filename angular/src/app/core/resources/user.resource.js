(function() {
  'use strict';

  angular
    .module('track-angular')
    .factory('User', function($resource) {

      return $resource('//localhost:5000/api/v1/users/:id');
    });

})();
