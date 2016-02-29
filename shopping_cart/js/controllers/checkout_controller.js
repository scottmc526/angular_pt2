app.controller('checkoutController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.cart = teaGetter.cart
  $scope.grandTotal = 0;
  $scope.show = false;
  for (var i = 0; i < $scope.cart.length; i++) {
    $scope.grandTotal += $scope.cart[i]['price'] * $scope.cart[i]['qty']
  }

  $scope.delete = teaGetter.deleteCart

}])
