angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  return { 
    search: function(options, callback) {
      // debugger;
      if (options.query) {
        $http({
          url: 'https://www.googleapis.com/youtube/v3/search',
          method: 'GET',
          params: {
            q: options.query,
            key: options.key,
            maxResult: options.maxResults || 5,
            part: 'snippet',    
            type: 'video',
            videoEmbeddable: true
          }
        }).then(function successCallback(response) {
          console.log('Success!');
          // debugger;
          // console.log(response);
          callback(response);
        }, function errorCallback(response) {
          console.log('FAILED');
        });
        
      }
    }
  };
});
