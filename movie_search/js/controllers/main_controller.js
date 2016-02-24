app.controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.search = function() {
    $http.get('http://omdbapi.com/?t='+$scope.input+'&r=json').then(function(data){
      $scope.movies = data.data;
      console.log($scope.movies);
    });
  }
}])
