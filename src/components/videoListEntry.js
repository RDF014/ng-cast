angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // debugger;
      // props = $scope.video.thumbnails.default.url;
      console.log($scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
