app.controller('mainController', ['$scope', 'todo', function($scope, todo){
  $scope.stuff = [];
  $scope.list  = function(){
    var listItems = {}
    listItems.items = $scope.item
    $scope.stuff.push(listItems);
    $scope.item = null;
  }

}])
