/**Q 1.
Create an arrow function called square that takes a number as an argument and returns its square Use the arrow function to calculate the square of a given number and display the result.*/

const square=(a)=>{
         let squareValue=a**2;
         return squareValue;
}

console.log(square(3));

1.
output:9

/**Q2.The following is an array of 10 students ages:
=>const ages=[19,22,19,24,20,25,26,24,25,24];
Sort the array and find the min and max age.
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(ma minus min)
Compare the value of (min - average) and (max - average), use abs() method
*/
const ages=[19,22,19,24,20,25,26,24,25];


//1.sorting array


const sortedArray=ages.sort();
console.log(sortedArray)
output:[19, 19, 20, 22, 24,24, 24, 25, 25, 26]


//finding minimum and maximum
let minAges=ages[0];
let maxAges=ages[ages.length-1];
console.log(minAges,maxAges);


 output:minAges=19,maxAges=26
 
 



 //2.finding median
 

 let middleIndex=Math.floor(ages.length/2);
let median;

// if numbers are even
if(ages.length%2===0){
median=(ages[middleIndex-1]+ages[middleIndex])/2;
}else{
//  if  numbers are odd
median=ages[middleIndex];
}
console.log(median);

output:median=24


//3.finding average

let sumOfNum=0;
for(let i=0;i<ages.length-1;i++){
         sumOfNum +=ages[i];
}
const average=sumOfNum/ages.length;
console.log(average);

output:average=19.77777777777778


//4. find the range of ages

const rangesOfAges=maxAges-minAges;
console.log("Range of ages",rangesOfAges);

output:Range of ages=7


// 5.compare the min-avg and max-avg;

let minDiffrence=minAges-average;
let maxDiffrence=maxAges-average;
console.log("minDiffrence",minDiffrence,"maxdiffrence",maxDiffrence)


output:minDiffrence= -0.7777777777777786 ,maxdiffrence= 6.222222222222221


/**
 * Q .3 Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name
 */

const contact=new Map();
contact.set("vivek kumar",{
         age:"22",
         email:"vivek@gmail.com",
         mobileNo:"64245242342"
 }
)

const getContact=(name)=>{
return contact.get(name);
}

console.log(getContact("vivek kumar")) ;
output:{ age: '22', email: 'vivek@gmail.com', mobileNo: '64245242342' };




//Q 4.Create two objects person1 and person2 with properties name and age. Create a function “introduce” tha prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself. using the introduce function.

 
let person1={name:"vivek kumar",age:"22"};
let person2={name:"ram",age:"i dont know"};

function introduce(){
        console.log(`hello i am ${this.name} and i am ${this.age} years old`);
}

introduce.call(person1);

output:hello i am vivek kumar and i am 22 years old;
 



// Q.5.You are developing a program to manage a list of unique items. Write a JavaScript program that uses a Set to store a collection of unique numbers. Use the Map object to associate each number with its square. Finally, print both the unique numbers and their corresponding squares.



let uniqueSet=new Set([3,2,6,8,12,5]);
let squareNumberMap=new Map();

uniqueSet.forEach(num => {
        squareNumberMap.set(num,num*num);
        
});
console.log(uniqueSet);
output:Set(6) { 3, 2, 6, 8, 12, 5 }

console.log(squareNumberMap);
output:Map(6) { 3 => 9, 2 => 4, 6 => 36, 8 => 64, 12 => 144, 5 => 25 }

squareNumberMap.forEach((num,sqr)=>{
        console.log(sqr,num);
})
output:
3 9
2 4
6 36
8 64
12 144
5 25
 

//Q6.1 Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and logs a message


function displayInfo(name,roll){
console.log(`my name is ${name} and my role is  ${roll}`)
}


//Q6.2 Use call to invoke the displayInfo function with specific arguments
displayInfo.call(null,"vivek","developer");

output:my name is vivek and my role is  developer

//Q6.3 Use apply to invoke the displayInfo function with arguments passed as an array
displayInfo.apply(null,["vivek","developer"]);
output:my name is vivek and my role is  developer

// Q6.4 Create another function named greet that logs a greeting with this context

function greet(){
     console.log(`hello! ${this.name} and i currently at post of ${this.role}`)   
}

let user={name:"vivek",role:"developer"}
greet.apply(user)


output: hello! vivek and i currently at post of developer






// Q7.Create an object named calculator with methods add, subtract, and multiply
// . Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or'multiply') and two numbers

// . Use call to perform an addition operation using the calculate method

// . Use aply to perform a multiplication operation using the calculate method with arguments as an array

// . Create another object named discountCalculator with a discount percentage property and a method aplyDiscount

// . Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused

// 7 task 1

const calculator={
        add:function(a,b){
                return a+b;
        },
        multiply:function(a,b){
                return a*b;
        }
        ,substract:function(a,b){
          
                return a-b;
        },
        calculate:function(operation,a,b){
                if(operation==="add"){
                   return this.add(a,b)     ;
                }else if(operation==="substract"){
                        return this.substract(a,b);
                }
                else{return this.multiply(a,b)}
        }
}
// . Use call to perform an addition operation using the calculate method
let addOperation=calculator.calculate.call(calculator,"add",6,5);
console.log(addOperation);

output:11




// . Use aply to perform a multiplication operation using the calculate method with arguments as an array
let opearateApply=calculator.calculate.apply(calculator,["multiply",5,3]);
console.log(opearateApply);

output:15




// . Create another object named discountCalculator with a discount percentage property and a method aplyDiscount

const discountCalculator={
discountPercent:10,
aplyDiscount:function(amount){
return amount-(amount*this.discountPercent)/100;
}

}

// . Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused
let calculateDiscount=discountCalculator.aplyDiscount.bind(discountCalculator);
const discountAmount=calculateDiscount(100)
console.log(`discounted Amount:${discountAmount}`);


output:discounted Amount:90**/