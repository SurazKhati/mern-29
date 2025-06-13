// decision making statement 
//program ko direction
// program ko flow rokney kaam garxa

// Product discount calculation
const product = {
    name: "Product Name",
    price: 1000,
    discount: 10,     // percentage
    isPercent: true
};

// Check if discount is in percentage
let afterDiscount; // define outside for global access
if (product.isPercent) {
    afterDiscount = product.price - (product.price * product.discount / 100);
} else {
    afterDiscount = product.price - product.discount; // flat discount if not percent
}

console.log("After Discount:", afterDiscount);


// ✅ Correct Nested If Structure (Fixed Syntax)
let expression = true;
let expression1 = true;
let expression3 = false;

if (expression) {
    // 1
    if (expression1) {
        // 2 
        if (expression3) {
            // 3
            console.log("Inside expression3");
        } else {
            // 4
            console.log("Inside else of expression3");
        }
    } else {
        // 5
        console.log("Inside else of expression1");
    }
} else {
    // Optional else block
    console.log("Expression is false");
}


//classwork
//create an object called student
// store name, email,marksObt as key for thr object and assign some values,
//consider marksObt should be between 0- 500
//now calculate the percentage and division obtained by the student
//if total maarks is 500
//for division calculation;
//if percentage is greater than or equal to 80 ==> print - Distinction
//if percentage is greater than or equal to 60 but less than 80 ===> print - second division
//if percentage is greater than or equal to 45 but less than 60 ===> print - third division
//if the percentage is less than 35 ==> print - Sorry you are failed
const student = {
    name: "Student One",
    email: "pne@student.com",
    markObt: 300
};

const percentage = (student.markObt / 500) * 100;
let division; // undefined initially

if (percentage >= 80) {
    division = "Distinction";
} else {
    if (percentage >= 60) {
        division = "First Division";
    } else {
        if (percentage >= 45) {
            division = "Second Division";
        } else {
            if (percentage >= 35) {
                division = "Third Division";
            } else {
                division = "Sorry! You are failed";
            }
        }
    }
}

console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Division:", division);

//hw
//calcuulate tax needs to pay by a software developer
// let us consider a software developer earns Nrp. 1000000 per annum
//calculate the amount of tax to be paid
//a. Monthly
//b. Yearly
// If the tax bracket is as below:
//For the first Npr. 100000 ---> 1%
// for the next Npr. 500000 ----> 15%
//For the next Npr. 700000 ---- 25%
// for the next Npr. 1000000 ---->30%
// for any above that -----> 36%
let income = 1000000;
let tax = 0;

if (income > 0) {
  for (let i = 0; i < 1; i++) {  // outer loop
    if (income > 100000) {
      tax += 100000 * 0.01;
      
      if (income > 600000) {
        tax += 500000 * 0.15;
        
        if (income > 1300000) {
          tax += 700000 * 0.25;
          
          if (income > 2300000) {
            tax += 1000000 * 0.30;
            tax += (income - 2300000) * 0.36;
          } else {
            tax += (income - 1300000) * 0.30;
          }
        } else {
          tax += (income - 600000) * 0.25;
        }
      } else {
        tax += (income - 100000) * 0.15;
      }
    } else {
      tax += income * 0.01;
    }
  }
}

let monthlyTax = tax / 12;

console.log("Yearly Tax: NPR " + tax.toFixed(2));
console.log("Monthly Tax: NPR " + monthlyTax.toFixed(2));


//another way by sandesh sir
const employee =  {
    name: "User One",
    salary: 5000000
}
let yearlyTax = 0;
if(employee.salary <= 500000){
    yearlyTax = employee.salary * 1/100
}else{
    if(employee.salary  <= 1000000 ){
        yearlyTax = 500000 * 1/100 + (employee.salary-500000)* 15/100
    }else{
        if(employee.salary<=17000000){
            yearlyTax = 5000 + 75000 +(employee.salary -1000000) * 25/100
        }else{
            if(employee.salary <= 2700000){
                yearlyTax = 5000+ 75000+700000 * 25/100+ (employee.salary - 17000000) * 30/100
            }else{
                yearlyTax = 5000+ 75000 + 700000 * 25/100 + 1000000*30/100 + (employee.salary-27000000)*36/100
            }
        }
    }
}
console.log("Monthly:", yearlyTax/12)
console.log("Yearly:", yearlyTax)

const netSalaryYearly = employee.salary - yearlyTax;
console.log("Yearly Salary:", netSalaryYearly)
console.log("Monthly salary:", netSalaryYearly/12)

//Hw
// print the following based on the day
// Create a variable called day store name of day (Any from Sunday till Saturday)
//if day is Saturday or Sundary ===>print Holiday
//if  day is any other day ===> Print Weekday

const day ="Saturday"
if(day === 'Sunday' || day === 'Saturday'){
    console.log("Holiday")
}else if(day === 'Friday'){
    console.log("Weekday")
}else {
    console.log("weekday")
}


//Switch case is very old fashioned code
switch(day){
    case "Sundaay":
    case "Saturday":
        console.log("Holiday")
        break;
    case "Friday":
        console.log("Weekend")
        break;
    default:
        console.log("Weekday")
        break;
       
}