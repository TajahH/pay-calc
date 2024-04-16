const readline = require("readline-sync");
let hourlyWage = 12
let hoursWorked = parseInt(readline.question(`How many hours did you work this week?: `))
let hoursOver40 = hoursWorked - 40 
let overtime = hoursOver40 * (hourlyWage*1.5)


if (hoursWorked < 40){
    console.log(`You earned £ ${hourlyWage*hoursWorked}.`)
} else if(hoursWorked > 60){
    console.log ("You can only work a maximum of 60 hours.")
} else if (hoursWorked > 40 && hoursWorked < 60){
    console.log(`You earned £ ${overtime} in overtime, and your pay for the first 40 hours is £${hourlyWage * }.`)
};

//need something else for line 13!!
