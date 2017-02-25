angular.module('video-player')
// .controller('appController', function($scope) {
//   $scope.videoList = window.exampleVideoData;
//   $scope.currentVideo = window.exampleVideoData[0];


//   $scope.selectVideo = function(obj) {
//     console.log('click');
//     $scope.currentVideo = obj;
//   };
// })
.directive('app', function() {
  return { 
    scope: {
      // selectVideo: '<',
      // searchResults: '<',
      // currentVideo: '<',
      // videos: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // debugger;
      // this.selectVideo = function() {};
      // ctrl.videoList = window.exampleVideoData;
      // $scope.currentVideo = window.exampleVideoData[0];


      // this.selectVideo = function(obj) {
      //   console.log('click');
      //   $scope.currentVideo = obj;
      // };
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };
}
);
