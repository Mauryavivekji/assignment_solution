/*Q1.
 Write a program that grades students based on their marks 
& If grater than 90 thqn A Grade
& If between 70 and 90 then a B grade
& If between 50 and 70 then a C grade
& Below 50 then an F grade
*/
let marks=65;

if(marks>=90){
         console.log("Congratulation you got A Grade");
}else if(marks>=70&&marks<=90){
         console.log("Congratulation you got B Grade")
}
else if(marks>=50&&marks<=70){
         console.log("Congratulation you got C Grade")
}else if(marks<=50){
         console.log("Congratulation you got F Grade")
}

/*1.
  OUTPUT
Congratulation you got C Grade
 */

// Q.Generate Random  numbers between any 2 given number
/*
let min=5;
let max=10;
let randomNo=Math.floor(Math.random()*(max-min+1))+min;
console.log(randomNo);

*/
 
/**Q.2.
Generate  numbers between any 2 given number
**/
let min=5;
let max=10;
for(let i=min+1;i<max;i++){
         console.log(i)
}

//2.
output:6,7,8,9
 

/*Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number i' positive and similarly for negative and zero also.
*/
let num=-4;
num>0?console.log("this is positive number"):num<0?console.log("this  is negative"):console.log("this is zero");

//3.
//output: this is negative number


/**
 * Q4.
 *  Describe the usage of the comma operator in JavaScript and provide an example.
 * 
 */
 ans:  
//  by using comma operator
//  1.we can Initialize the multiple variable
//  2.we can evaluate the multiple expression in single statement .
 



/**
 * Q5. You're creatin, a basic login 'y' item. Make a login function with two thin,': a username and a
password. Check if the username is "admin" and the password is "12375". If they are both correct, show "Login successful"; if not, show "Invalid credential'."
 
 */

let password="12375";
let username="admin";

password=="12375"&&username=="admin"?console.log("login Successfully"):console.log("invalid credential");

//output:login Successfully




/**
 * Q6.
 *  You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the processing fee associated with each payment method. For example, "credit" may have a processing fee of 2%, "debit" 1.5%, and "paypal" 3%.
 */

let payment_method="paypal";

switch(payment_method){
case "credit":console.log("processing fee is 2%");
break;
case "debit":console.log("processing fee is 1.5%");
break;
case "paypal":console.log("processing fee is 3%");
break;
default:console.log("choose correct payment method");
}


//6.
//output: processing fee is 3%




/**
 *Q.7. 
 You are building a weather application. Write a JavaScript program that takes the current temperature as input and uses the conditional (ternary) operator to determine and print the weather condition. If the temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".
 */

 let temp=50;
 temp>30?console.log("the weathet condition is hot"):console.log("weather condition is moderate");
  

 //.7
//  output:the weathet condition is hot

 

 /*Q.8. you are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the given integer.
 */

let n = 1;
let sum = 0;
do {
  sum = sum + n;
  n++;

  
} while (n <= 15);
console.log(sum);

// 8.
output: 120