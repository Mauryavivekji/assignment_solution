// Q 1.You are building an e-commerce website Write a function that calculates the total price of a customer's order You're given an array of items, each with a price property Use the forEach method to iterate through the array and sum up the prices to get the total order amount


const customerList=[

 {name:"laptop",price:56000},
{name:"mobile",price:20000},
{name:"charger",price:1000},
{name:"charger",price:1000}
]
let sum=0;
customerList.forEach(items=>{sum+=items.price})
console.log(sum)



output:78000





// Q 2. In this challenge, your task is to create a function that generates a random number and prints it to the console every 2 seconds The program should keep printing new random numbers indefinitely, with a 2-second delay between each number.

let GenerateRandom=()=>{
         let randomNum=Math.floor(Math.random()*100);
         console.log(randomNum)
}

let printRandom=()=>{
 setInterval(GenerateRandom,2000)
}
printRandom();


output:
88
67 //after 2 second
47//after 2 second





// Q 3You are given an array of expense objects representing monthly expenses. Each object has properties, amount and category. Use the map method to create a new array that includes the calculated tax for each expense. Assume a tax rate of 10%.

let expenses=[
         {amount:100,category:"utility"},
         {amount:100,category:"grocery"},
         {amount:50,category:"entertainment"},

]

let calculateExpence=expenses.map(expense=>{
         let tax=expense.amount*0.1;
         return {...expense,tax:tax}
})

console.log(calculateExpence)





output:[
         { amount: 100, category: 'utility', tax: 10 },
         { amount: 100, category: 'grocery', tax: 10 },
         { amount: 50, category: 'entertainment', tax: 5 }
       ]






// Q 4 Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries.

let expenses=[
                  {amount:100,category:"utility"},
                  {amount:100,category:"grocery"},
                  {amount:50,category:"entertainment"}
         
         ]

         let groceryExpences=expenses.filter((expense)=>expense.category==="utility")

         console.log(groceryExpences)



output:[ { amount: 100, category: 'utility' } ]


// Q5 Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.

let expenses=[
                           {amount:100,category:"utility"},
                           {amount:100,category:"grocery"},
                           {amount:50,category:"entertainment"}
                  
                  ];

                  let totalAmount=expenses.reduce((sum,expense)=>
                           sum+expense.amount,0
                  )

                  console.log(totalAmount)


output:250


// Q 6 You have a list of expenses, each with an amount and a category. Now, create a function named categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or "Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array called categorizedExpenses, where each element represents the category for the corresponding expense in the original list. Finally, print out the categorizedExpenses array.

let expenses=[
                                    {amount:100,category:"utility"},
                                    {amount:300,category:"grocery"},
                                    {amount:50,category:"entertainment"}
                           
                           ];

let categorizeExpenses=(expense)=>{
if(expense.amount>100){
return "high expense";
}else{
         return "low expense";
}

}

let categorizedExpenses=expenses.map((expense)=>categorizeExpenses(expense))
console.log(categorizedExpenses)

output:[ 'low expense', 'high expense', 'low expense' ]


// Q 7 Consider an array of numbers named originalNumbers with the values
//  [2, 5, 8, 10, 3]. 
// Your task is to use the forEach method to iterate through each element in the array. During the iteration, double the value of each number. After completing the iteration, display the modified array.

let originalNumbers =[2, 5, 8, 10, 3];
originalNumbers.forEach((num,i,arr)=>{arr[i]=num*2
        
}
);
console.log(originalNumbers)


output:[4, 10, 16, 20, 6];




// Q 8 Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array.

let originalNumbers =[2, 5, 8, 10, 3];

let newArray=[];
originalNumbers.forEach((num)=>{if(num%2==0){
       newArray.push(num)  
}})
console.log(newArray)



 output:new even array [ 2, 8, 10 ]