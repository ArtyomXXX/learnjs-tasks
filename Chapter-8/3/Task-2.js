// Добавьте функциям декорирующий метод "defer()"

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2); 