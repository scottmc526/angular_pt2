app.controller('addController', function($scope, $routeParams){
  $scope.num1 = $routeParams.num1
  $scope.num2 = $routeParams.num2
  $scope.total = +$scope.num1 +  +$scope.num2
  console.log($scope.total);
})
