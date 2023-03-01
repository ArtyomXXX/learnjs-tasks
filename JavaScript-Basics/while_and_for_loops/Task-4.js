// Вывести простые числа

let n = 10;
let primeNumbers = "";

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        primeNumbers += (i + " ");
    }

console.log(primeNumbers);