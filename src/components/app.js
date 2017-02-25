angular.module('video-player')
.controller('appController', function($scope) {
  $scope.videoList = window.exampleVideoData;
  $scope.onClick = function() {
  };
  $scope.getSource = function(videoId) {
    return 'https://www.youtube.com/embed/' + videoId;
  };
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
