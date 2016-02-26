app.controller('mainController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.categories = [];
    teaGetter.getTea().then(function(data){
      $scope.teas = data.data
      // for (var i = 0; i < $scope.teas.length; i++) {
      //   $scope.categories.push($scope.teas[i]['categories'])
      // }
      // console.log($scope.categories);
    })
}])
