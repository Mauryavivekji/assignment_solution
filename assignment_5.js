//Assignment 1
// Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after a delay of 1 second.


function sumAsync(a,b,callback){
         setTimeout(()=>{const result=a+b;
                  callback(result)},1000)

                  
         
}

sumAsync(4,6,(result)=>{
         console.log(result);
         
})

//Assignment 2
//Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message "Data fetched successfully."

function getData(){
         return new Promise((res,rej)=>{
                  setTimeout(() => {
                           
                           res("Data fetched successfully")
                  }, 2000);
         })
}
getData().then(message=>console.log(message))
output:Data fetched successfully

// //Assignment 3
// //Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns the parsed JSON response.

async function fetchData(url) {
         const res=await fetch(url);
         const data=await res.json();
return data;
         
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then(data=>console.log(data))

output:{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//Assignment 4
//Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL (https://jsonplaceholder.typicode.com/todos/1) and returns the parsed JSON response.


async function fetcheData (url){
     const res=await fetch(url)    ;
     const data=await res.json();
     return data;
}
fetcheData("https://jsonplaceholder.typicode.com/todos/1").then(data=>console.log(data))


//Assignment 5
//Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The function should multiply each element of the array by 2 and pass the result to the callback.

function multiplyWithCallback(numbers,callback) {{
     const doubleNum=numbers.map((num)=>num*2);
     callback(doubleNum);
}
}
const arr=[3,2,5,7,2];
multiplyWithCallback(arr,(value)=>{console.log(value)})

output:[ 6, 4, 10, 14, 4 ]


//Assignment 6
//Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are fetched. Return an object with user details and posts.

function fetchUserDataAndPosts(userId){
     return fetch("https://jsonplaceholder.typicode.com/users/${userId}")
     .then((response)=>response.json())
     .then((userData)=>{
          return fetch("https://jsonplaceholder.typicode.com/posts?userId=${userId}")
          .then((response)=>
               response.json()
          )
          .then((post)=>({user:userData,post}))
     })
}
fetchUserDataAndPosts(1).then((result)=>console.log(result))
output:
{ user: {}, post: [] }



//Assignment 7
//Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the URLs concurrently. Return an array of responses.

function fetchMultipleData(urls){
     const promises=urls.map((url)=>fetch(url).then((response)=>response.json()))
     return Promise.all(promises);
}

const urlsToFetch=[
     "https://jsonplaceholder.typicode.com/todos/1",
     "https://jsonplaceholder.typicode.com/todos/2",
     "https://jsonplaceholder.typicode.com/todos/3",
     "https://jsonplaceholder.typicode.com/todos/4"
]

fetchMultipleData(urlsToFetch).then((response)=>console.log(response))


output:
[
     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
     {
       userId: 1,
       id: 2,
       title: 'quis ut nam facilis et officia qui',
       completed: false
     },
     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
     { userId: 1, id: 4, title: 'et porro tempora', completed: true }
   ]



//Assignment 8
//Create a function racePromises that takes an array of promises and returns the result of the first promise that resolves or rejects. Use Promise.race() to implement this.

function racePromises(promises) {
     return Promise.race(promises);
   }
   
   // Example usage:
   const promise1 = new Promise((resolve, reject) => {
     setTimeout(resolve, 500, 'First Promise Resolved');
   });
   
   const promise2 = new Promise((resolve, reject) => {
     setTimeout(resolve, 100, 'Second Promise Resolved');
   });
   
   const promise3 = new Promise((resolve, reject) => {
     setTimeout(reject, 300, 'Third Promise Rejected');
   });
   
   racePromises([promise1, promise2, promise3])
     .then(result => console.log('Promise Resolved with:', result))
     .catch(error => console.error('Promise Rejected with:', error));


     output:
     Promise Resolved with: Second Promise Resolved