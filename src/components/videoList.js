angular.module('video-player')
.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<'
    },
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      debugger;
      // $scope.videoList = window.exampleVideoData;
      console.log($scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
