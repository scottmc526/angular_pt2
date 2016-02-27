app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input,qty) {
      document.getElementById('qty').value === '' ? input.qty = 1 : input.qty = Number(document.getElementById('qty').value);
      this.cart.push(input)
      console.log(this.cart);
    }
  }
}])
