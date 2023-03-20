// Максимальная зарплата

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

    let max = 0;
    let maxSalary = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxSalary = name;
      }
    }
  
    return maxSalary;
  }

  console.log(topSalary(salaries));