app.controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.search = function() {
    $scope.titles = [];
    $http.get('http://omdbapi.com/?s='+$scope.input).then(function(data){
      $scope.movies = data.data.Search;
        for (var i =0; i< $scope.movies.length; i++){
          var title = $scope.movies[i]['Title'];
          $scope.titles.push(title)
        }
        console.log($scope.titles);
    });

  }
}])
