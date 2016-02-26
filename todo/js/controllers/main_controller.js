app.controller('mainController', ['$scope', 'todo', function($scope, todo){

  $scope.stuff = todo.stuff
  $scope.doAThing =  function(){
    todo.list($scope.item);
    $scope.item = null;
  }

}])
