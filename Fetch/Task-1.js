// Получите данные о пользователях GitHub

async function getUsers(names) {
    let logins = [];

    for (let name of names) {

        let login = await fetch(`https://api.github.com/users/${name}`).then(

        successResponse => {
            if (successResponse.ok) {
                return successResponse.json();
            } else {
                return null;
            }
        },

        failResponse => {
            return null;
        }
        );

        logins.push(login);
    }

    let results = await Promise.all(logins);

    return results;
}

let names = ['ArtyomXXX', 'Gev'];
console.log(getUsers(names));