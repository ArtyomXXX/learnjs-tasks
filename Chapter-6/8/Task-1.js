//Вывод каждую секунду

  // использование: setInterval

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log();(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 10);


 // Используем: setTimeout

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);