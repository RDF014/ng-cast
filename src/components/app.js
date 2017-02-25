angular.module('video-player')

.directive('app', function() {

  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      $scope.videoList = window.exampleVideoData;
      debugger;
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };
}
);
