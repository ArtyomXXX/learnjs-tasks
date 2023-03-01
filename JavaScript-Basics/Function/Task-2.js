// Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    if (a === b) {
        return "Эти числа равны!";
    } else if (a < b) {
        return a;
    } else {
        return b;
    }
}

let a = 2, b = 1;
console.log(min(a, b));