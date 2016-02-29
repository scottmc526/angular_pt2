app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    total: 0,
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input,qty) {
      qty == undefined ? input.qty = 1 : input.qty = Number(qty)
      this.cart.push(input)
    },
    deleteCart: function(input){
      this.cart.splice(input,1)
    }
  }
}])
