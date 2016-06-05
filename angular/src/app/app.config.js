(function() {
  'use strict';

  angular
    .module('track-angular')
    .config(config);

  /** @ngInject */
  function config($httpProvider, $logProvider, $locationProvider, toastrConfig) {

    // Configure CSRF
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    // Enable log
    $logProvider.debugEnabled(true);

    // Use the HTML5 History API
    $locationProvider.html5Mode(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
  }

})();
