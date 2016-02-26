app.controller('mainController', ['teaGetter', '$scope', '$http', function(teaGetter, $scope, $http){
  $scope.teas = function(){
    teaGetter.getTea().then(function(data){
      console.log(data);
    })

  }
}])
