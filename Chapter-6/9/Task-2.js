// Задерживающий декоратор

const f = (x, ...arg) => {
    console.log(x, ...arg);
  }
  
  
  const delay = (f, ms) => (...arg) => {
    setTimeout(() => {
      f.apply(this, arg)
    }, ms)
  }
  
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  // f1000("test", 'hello');
  // f1500("test");