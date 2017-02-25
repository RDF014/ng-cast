angular.module('video-player')
.controller('appController', function($scope) {
  $scope.videoList = window.exampleVideoData;
  $scope.currentVideo = window.exampleVideoData[0].id.videoId;

  $scope.onClick = function() {
  };
  $scope.getSource = function(videoId) {
    return 'https://www.youtube.com/embed/' + videoId;
  };
  $scope.url = 'https://www.youtube.com/embed/' + $scope.$currentVideo; 
  debugger;
})
.directive('app', function() {
  return {
    // controllerAs: 'ctrl',
    // bindToController: true,
    controller: function($scope) {
      debugger;
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };
}
);
