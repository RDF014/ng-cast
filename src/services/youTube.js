angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  return { 
    search: function(options, callback) {
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
          q: options,
          key: window.YOUTUBE_API_KEY,
          maxResult: 5,
          part: 'snippet',    
          type: 'video',
          videoEmbeddable: true
        }
      }).then(function successCallback(data) {
        console.log('Success!');
        callback(data.items);
      }, function errorCallback(data) {
        console.log('FAILED ', data);
      });
    }
  };
});
