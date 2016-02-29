app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    total: 0,
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input,qty) {
      for (var i = 0; i < this.cart.length; i++) {
        console.log(this[cart][i]);
        if (input[i]) {
          input[i]['qty'] += 1
        } else {
          qty == undefined ? input.qty = 1 : input.qty = Number(qty)
          this.cart.push(input)

        }
      }
    }
  }
}])
