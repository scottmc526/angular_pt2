app.controller('checkoutController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.cart = teaGetter.cart
  $scope.grandTotal = 0;
  $scope.editBox = false;

  for (var i = 0; i < $scope.cart.length; i++) {
    $scope.grandTotal += $scope.cart[i]['price'] * $scope.cart[i]['qty']
  }

  $scope.delete = function(input, price){
    price = $scope.cart[input]['price'] * $scope.cart[input]['qty']
    teaGetter.deleteCart(input)
    $scope.grandTotal -= price
  }
  $scope.edit = function(input, qty) {
    teaGetter.editCart(input, qty)
    $scope.grandTotal = $scope.cart[input]['price'] * $scope.cart[input]['qty']
  }

  $scope.toggle = function() {
    $scope.editBox = !$scope.editBox
  }
}])
