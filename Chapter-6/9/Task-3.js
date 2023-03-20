//Декоратор debounce

const cons = (number) => {
    console.log(number)
  }
  
  const debounce = (func, ms) => {
    let isTimeout = false
  
    return (...number) => {
      if (isTimeout) {
        return
      }
      func.apply(this, number)
  
      isTimeout = true
  
      setTimeout(() => isTimeout = false, ms)
    }
  
  }
  
  let g = debounce(cons, 1000);
  
  // g(1)
  // g(2)
  
  // setTimeout( () => g(3), 100); // проигнорирован (прошло только 100 мс)
  // setTimeout( () => g(4), 1100); // выполняется
  // setTimeout( () => g(5), 1500);