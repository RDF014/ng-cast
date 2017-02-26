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
    controller: function($scope, youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      var self = this;
      this.selectVideo = function(obj) {
        // console.log('click');
        // debugger;
        this.currentVideo = obj;
        // console.log(this.currentVideo);
      }.bind(this);
      this.searchResults = function(searchTerm) {
        console.log('click');
        // debugger;
        var options = {
          query: searchTerm,
          key: window.YOUTUBE_API_KEY,
          maxResults: 5
        };
        youTube.search(options, function(response) {
          // debugger;
          // this.videos = [];
          // this.videos.push(response.data.items);
          // debugger;
          // console.log(response);
          if (response.data === undefined) {
            self.videos = response;
          } else {
            self.videos = response.data.items;
          }
          self.currentVideo = self.videos[0];
          // self.videos = response.data.items ? response.data.items : response;
        });
      };
      console.log($scope);
      this.searchResults('dog');
    },
    templateUrl: 'src/templates/app.html'
  };
}
);
