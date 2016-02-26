app.service('todo', [function(){
  return {
    stuff: [],
    list: function(input){
      var listItems = {};
      if (input){
        listItems.items = input
        this.stuff.push(listItems);
      } else {
        alert('enter something idiot')
      }
    },
    edit: function(input){
      
    }
  }
}])
