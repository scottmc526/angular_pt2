app.controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.search = function() {
    $scope.movies = [];
    $http.get('http://omdbapi.com/?s='+$scope.input).then(function(data){
      $scope.movies = data.data.Search;
    });
  }
}])
