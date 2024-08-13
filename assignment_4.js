//Q.1 You are building a counter application that tracks the number o times a button is clicked. Implement the counter using closure.

const counterFun=()=>{
         let count=0;
         return function(){
                  count++;
                 console.log(count) 
         }
}

let counter=counterFun();
counter() output //1
counter() output //2
counter() output //3


//Q 2 You have an object representing a customer order with properties orderId, productName, and quantity. Use destructuring to extract and print these properties.

let order={
         orderId:"12345",
         productName:"laptop",
         quantity:2
}

const{orderId,productName,quantity}=order;
console.log("orderId:",orderId)
console.log("productName:",productName)
console.log("quantity:",quantity)


output:
orderId: 12345
productName: laptop
quantity: 2




//Q 3.In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures try to create a cart array and return a function to getCartItems.

function shoppingCart(...a){
         let cartItems=a;
         return{
                  
                  getCartItem:function(){
                           return cartItems;
                  }
         }
}

let arr=[34,3,5,11];
const cart=shoppingCart(...arr);
console.log(cart)             **** output:{ getCartItem: [Function: getCartItem] } 
console.log(cart.getCartItem())    ******output: [ 34, 3, 5, 11 ]


//Q .4 Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
//Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use javascript closures to achieve the output.


function createCart() {
         let cart = [];
     
         return function addToCart(productId, name, quantity, price) {
             // Check if the product already exists in the cart
             let existingProduct = cart.find(item => item.productId === productId);
     
             if (existingProduct) {
                 // If the product exists, increment the quantity
                 existingProduct.quantity += quantity;
             } else {
                 // If the product does not exist, add it to the cart
                 cart.push({ productId, name, quantity, price });
             }
     
             console.log(cart); // To display the current state of the cart
         };
     }
     
     const addToCart = createCart();
     
     // Example usage
     addToCart(1, "Laptop", 1, 1000);  // Adds a Laptop to the cart
     addToCart(2, "Phone", 2, 500);    // Adds 2 Phones to the cart
     addToCart(1, "Laptop", 2, 1000);  // Increments the quantity of Laptop by 2
     



     output:
     Adds a Laptop to the cart
     [ { productId: 1, name: 'Laptop', quantity: 1, price: 1000 } ]

     Adds a Laptop to the cart
     Adds 2 Phones to the cart


[
  { productId: 1, name: 'Laptop', quantity: 1, price: 1000 },
  { productId: 2, name: 'Phone', quantity: 2, price: 500 }
]

Increments the quantity of Laptop by 2
[
  { productId: 1, name: 'Laptop', quantity: 3, price: 1000 },
  { productId: 2, name: 'Phone', quantity: 2, price: 500 }
]

    //Q5.// Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On calling the remove item closure function, the specified productId item must be removed from cartItems array.Use javascript closures to achieve the output.

    function createCart() {
         let cart = [];
     
         function addToCart(productId, name, quantity, price) {
             let existingProduct = cart.find(item => item.productId === productId);
     
             if (existingProduct) {
                 existingProduct.quantity += quantity;
             } else {
                 cart.push({ productId, name, quantity, price });
             }
     
             console.log(cart); // To display the current state of the cart
         }
     
         function removeFromCart(productId) {
             // Filter the cart to remove the item with the specified productId
             cart = cart.filter(item => item.productId !== productId);
     
             console.log(cart); // To display the current state of the cart
         }
     
         return { addToCart, removeFromCart };
     }
     
     const cart = createCart();
     
     // Example usage
     cart.addToCart(1, "Laptop", 1, 1000);  // Adds a Laptop to the cart
     cart.addToCart(2, "Phone", 2, 500);    // Adds 2 Phones to the cart
     cart.addToCart(1, "Laptop", 2, 1000);  // Increments the quantity of Laptop by 2
     cart.removeFromCart(1);                // Removes the Laptop from the cart
     cart.removeFromCart(2); 
     
     // Removes the Phone from the cart
     // Adds a Laptop to the cart
     [ { productId: 1, name: 'Laptop', quantity: 1, price: 1000 } ]
          // Adds a Laptop to the cart
     // Adds 2 Phones to the cart
     [
       { productId: 1, name: 'Laptop', quantity: 1, price: 1000 },
       { productId: 2, name: 'Phone', quantity: 2, price: 500 }
     ]
     // Increments the quantity of Laptop by 2
     [
       { productId: 1, name: 'Laptop', quantity: 3, price: 1000 },
       { productId: 2, name: 'Phone', quantity: 2, price: 500 }
     ]
     // Removes the Laptop from the cart
     [ { productId: 2, name: 'Phone', quantity: 2, price: 500 } ]
     // Removes the Laptop from the cart
     []
     
Q 6.You are developing a music playlist management system. Implement functions that leverage closures and higher-order functions to perform common playlist operations.
Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This closure should allow adding and listing songs for the given playlist.
Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the specified playlist. Use the closure created in TASK 1.
Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the Task 1

     
Task 1: Create the createPlaylist function

function createPlaylist(playlistName){
let playlist=[];

function addSong(artist,songName){
playlist.push({artist,songName})
}
// Task 2: Use the closure to add a song to the playlist
//      // Task 3: Use the closure to list songs in the playlist
function listSongs(){
     console.log(`playlist:${playlistName}`)    
     playlist.forEach((song,index)=>{
         console.log(`${index+1}. ${song.songName} by ${song.artist}`)
     })
}

return{addSong,listSongs}



}

let myPlaylist=createPlaylist("my favorite song");
myPlaylist.addSong("Arijit singh","hamari adhuri kahani")
myPlaylist.addSong("jibin nautiyal","sun sun barsat ki dhun");
myPlaylist.addSong("lata mangeshkar","a mere vatan ke logo");

myPlaylist.listSongs()




output: playlist:my favorite song
1. hamari adhuri kahani by Arijit singh
2. sun sun barsat ki dhun by jibin nautiyal
3. a mere vatan ke logo by lata mangeshkar