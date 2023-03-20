// Проверка на пустоту

let schedule = {};

function isEmpty(schedule) {
    for (key in schedule) {
        return false;
    }
    return true;
}

console.log(isEmpty(schedule));