app.controller('mainController', ['$scope', 'calcService', function($scope, calcService){
  $scope.math = function() {
    $scope.value = document.getElementById('operation').value;

    switch ($scope.value) {
      case '1':
          $scope.total = calcService.add(+$scope.num1, +$scope.num2)
        break;
      case '2':
          $scope.total = calcService.subtract(+$scope.num1, +$scope.num2)
        break;
      case '3':
          $scope.total = calcService.multiply(+$scope.num1, +$scope.num2)
        break;
      case '4':
          $scope.total = calcService.divide(+$scope.num1, +$scope.num2)
        break;
      case '5':
          $scope.total = calcService.power(+$scope.num1, +$scope.num2)
      default: console.log('didnt work');

    }
  }


}])
