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
    },
    editCart : function(input, qty) {
      qty == undefined ? this.cart[input]['qty'] = 1 : this.cart[input]['qty'] = qty;
    },
    cartTotal : function(){
      var total = 0;
      this.cart.forEach(function(item){
        total += item.qty * item.price;
      })
      return total;
    }
  }
}])
