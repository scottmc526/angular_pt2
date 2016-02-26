app.service('teaGetter', ['$http', function($http){
  return {
    getTea: function(){
      return $http.get('/tea_list.json')
    }
  }
}])
