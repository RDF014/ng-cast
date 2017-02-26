angular.module('video-player')

.directive('search', function() {
  return {
    // TODO
    scope: {
      result: '<',
      searchTerm: '<',
      service: '<'
    },
    controller: function($scope) {
      // console.log($scope);
      this.onClick = () => {
        this.service.search(this.searchTerm, (data) => {
          this.result(this.searchTerm);   
        });
      };
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
