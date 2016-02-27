app.service('teaGetter', ['$http', function($http){
  return {
    cart: [],
    getTea: function(){
      return $http.get('/tea_list.json')
    },
    addCart: function(input,qty) {
      if(document.getElementById('qty').value === ''){
        input.qty = 1
      }else {
        input.qty = Number(document.getElementById('qty').value);
      }
      this.cart.push(input)
    }
  }
}])
