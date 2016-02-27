app.controller('mainController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.cart = teaGetter.cart;
  $scope.emptyBag = 'Empty!'
  $scope.bagValue = 0;

  teaGetter.getTea().then(function(data){
    $scope.teas = data.data
  })
  $scope.add = function(input) {
    teaGetter.addCart(input)
    $scope.bagValue++
    console.log($scope.cart);
  }
}])


// for (var i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] += 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
