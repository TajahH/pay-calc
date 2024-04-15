const readline = require("readline-sync");
let hourlyWage = 12
let overtime = hourlyWage*1.5
let hoursWorked = parseInt(readline.question(`How many hours did you work this week?: `))

if (hoursWorked < 40){
    console.log(`You earned £ ${hourlyWage*hoursWorked}.`)
} else {
    console.log(`You earned £ ${hoursWorked*overtime}.`)
}
