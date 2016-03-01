app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input,qty) {
      input.editBox = false;
      qty == undefined ? input.qty = 1 : input.qty = Number(qty)
      this.cart.push(input)
    },
    deleteCart: function(input){
      this.cart.splice(input,1)
    },
    editCart : function(input, qty) {
      qty == undefined ? this.cart[input]['qty'] = this.cart[input]['qty'] : this.cart[input]['qty'] = qty;
      this.cart[input]['editBox'] = !this.cart[input]['editBox']
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
