angular.module('video-player')

.directive('search', function() {
  return {
    // TODO
    scope: {
      result: '<',
      searchTerm: '<',
      service: '<'
    },
    controller: function($scope) {
      console.log($scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
