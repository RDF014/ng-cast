angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      debugger;
      console.log($scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
