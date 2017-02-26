angular.module('video-player')
.directive('app', function() {
  return { 
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, youTube) {

      this.videos = [];
      this.currentVideo = window.exampleVideoData[0];      
      this.search = youTube;
      
      this.results = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };
      
      this.selectVideo = (obj) => {
        this.currentVideo = obj;
      };
      
      this.searchResults = function(searchTerm) {
      };
      this.search.search('dog', (data) => {
        this.results(data);
      });
    },
    templateUrl: 'src/templates/app.html'
  };
});
