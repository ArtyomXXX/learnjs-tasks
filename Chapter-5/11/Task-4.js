// Какой день месяца был много дней назад?

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));