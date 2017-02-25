angular.module('video-player')
//  .controller('appController', function($scope) {
// //   $scope.videoList = window.exampleVideoData;
// //   $scope.currentVideo = window.exampleVideoData[0];


//   $scope.selectVideo = function(obj) {
//     debugger;
//     console.log('click');
//     $scope.currentVideo = obj;
//   };
//  })
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
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
      this.selectVideo = function(obj) {
        // console.log('click');
        // debugger;
        this.currentVideo = obj;
        // console.log(this.currentVideo);
      }.bind(this);
      this.searchResults = function() {};
      // debugger;

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
