app.controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.search = function() {
    console.log('hitting');
    $scope.movies = [];
    $http.get('http://omdbapi.com/?s='+$scope.input).then(function(data){
      console.log($scope.movies = data.data.Search);
    });
  }
}])
