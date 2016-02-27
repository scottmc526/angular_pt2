app.controller('mainController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.cart = teaGetter.cart;
  $scope.emptyBag = 'Empty!'
  $scope.bagValue = 0;

  teaGetter.getTea().then(function(data){
    $scope.teas = data.data
  })
  $scope.add = function(input) {
    teaGetter.addCart(input)
    console.log(input);
    $scope.bagValue++
  }
}])
