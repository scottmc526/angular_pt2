app.controller('movieController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('http://www.omdbapi.com/?i='+$routeParams.imdbID+'&r=json'+$scope.input).then(function(data){
    $scope.movie = data;
  });
}])
