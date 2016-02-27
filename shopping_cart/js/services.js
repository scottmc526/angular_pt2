app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input) {
      this.cart.push(input)
    }
  }
}])
