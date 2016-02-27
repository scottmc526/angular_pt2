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
    totalz: function(){
      for (var i = 0; i < this.cart.length; i++) {
        return this.total += this.cart[i]['price'] * this.cart[i]['qty']
      }
    }
  }
}])
