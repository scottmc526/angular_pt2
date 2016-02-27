app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input,qty) {
      qty == undefined ? input.qty = 1 : input.qty = Number(qty)
      // input.qty = qty
      this.cart.push(input)
      console.log(this.cart);
    }
  }
}])
