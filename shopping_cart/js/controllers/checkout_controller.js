app.controller('checkoutController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.cart = teaGetter.cart
  $scope.total = $scope.cart.price * $scope.cart.qty
}])
