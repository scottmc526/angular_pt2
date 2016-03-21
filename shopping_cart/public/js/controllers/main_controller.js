app.controller('mainController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.cart = teaGetter.cart;
  $scope.bagValue = 0;

  teaGetter.getTea().then(function(data){
    $scope.teas = data.data
  })
  $scope.add = function(input,qty) {
    teaGetter.addCart(input,qty)
    $scope.bagValue = $scope.cart.length
  }
}])
