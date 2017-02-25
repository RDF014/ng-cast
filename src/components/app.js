angular.module('video-player')
.controller('appController', function($scope) {
  $scope.videoList = window.exampleVideoData;
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
