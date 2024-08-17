//1. You are developing the error handling mechanism for an online shopping cart application The application allows users to add prodcts to their cart and proceed to checkout Implement error handling to address different types of errors that might occur during the shopping process

//Task 1: Add Prodct to Cart function

//Create a function addToCart that simulates adding a product to the sopping cart. The function sould take the product details (name, price, quantity) as parameters and throw errors under certain conditions

//1. If te product name is not provided, throw an error indicating Product name is required.

//2. If te product price is not a positive nuuber, throw an error indicating Invalid product price.

//3. If the quantity is not a positive integer, throw an error indicating Invalid quantity.
function addToCart(name, price, quantity) {
        // Check if product name is provided
        if (!name) {
            throw new Error("Product name is required.");
        }
    
        // Check if the product price is a positive number
        if (typeof price !== 'number' || price <= 0) {
            throw new Error("Invalid product price.");
        }
    
        // Check if the quantity is a positive integer
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Invalid quantity.");
        }
    
        // Simulate adding the product to the cart
        const product = {
            name: name,
            price: price,
            quantity: quantity
        };
    
        return product;
    }


//     task 2

    function checkout(cart) {
        // Check if the cart is empty
        if (cart.length === 0) {
            throw new Error("Cart is empty. Add items before checkout.");
        }
    
        // Simulate the checkout process
        console.log("Checkout successful! Your cart:", cart);
    }
    
    // Example usage:
    try {
        const cart = [];
        // Add products to the cart
        checkout(cart);
        cart.push(addToCart("", 1000, 2));
        cart.push(addToCart("mouse", 50, 1));
    
        // Proceed to checkout
        console.log(cart)
    } catch (error) {
        console.error(error.message);
    }
    

output:
Error: Invalid product price.
Cart is empty. Add items before checkout.

// 2. A You are working on a user athentication modle for a web application Implement error handling for the login processCreate a fnction login that simlates the ser login process The fnction shold take the username and password as parameters and throw errors nder certain conditions

// // ' If the sername is not provided, throw an error indicating Username is required
// ' If the password is not provided, throw an error indicating Password is reqired
// ' If the username and password do not match any valid credentials, throw an error indicating Invalid username or password.

function login(username,password){
        Credential={
                username:"vivek kumar",
                password:"VivekJi@1234"
        }
if(!username){
        throw new Error("username is required");
}
if(!password){
        throw new Error("password is not  provided");
}

if(Credential.username!==username||Credential.password!==password){
throw new Error("invalid username and password")
}

console.log("login successfully")
}
try {
        
        login("","VivekJi@1234")
        output:
        username is required
        login("vivek kumar","VivekJi@1234")
        output:
        login successfully

        login("sita ram","VivekJi@1234")
output:
       invalid username or password
} catch (error) {
        console.error(error.message)
}


// You are developing a payment processing module for an e-commerce platform. Implement error handling for the payment transaction process.Create a function processPayment that simulates

// processing a payment transaction. The function should take payment details (amount, card number, expiration date) as parameters and throw errors under certain conditions
// 3 If the payment amount is not a positive number, throw an error indicating Invalid payment amount.
// 3 If the card number is not provided or is not a valid credit card number, throw an error indicating Invalid card number.
// 3 If the expiration date is not provided or is in the past, throw an error in8icating Invalid expiration date.

function processPayment(amount, cardNumber, expirationDate) {
        // Check if the payment amount is a positive number
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Invalid payment amount.");
        }
    
        // Validate the card number (basic validation for length and digits)
        const cardNumberRegex = /^[0-9]{13,19}$/; // Simple regex for credit card number (13 to 19 digits)
        if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
            throw new Error("Invalid card number.");
        }
    
        // Validate the expiration date
        const currentDate = new Date();
        const [month, year] = expirationDate.split('/').map(Number); // Assume expirationDate format is MM/YYYY
    
        // Check if expirationDate is provided and is a valid future date
        if (!expirationDate || 
            isNaN(month) || isNaN(year) || 
            month < 1 || month > 12 || 
            year < currentDate.getFullYear() || 
            (year === currentDate.getFullYear() && month < (currentDate.getMonth() + 1))
        ) {
            throw new Error("Invalid expiration date.");
        }
    
        // Simulate payment processing
        console.log("Payment processed successfully for amount:", amount);
    }
    
    // Example usage:
    try {
        const amount = 100.50;
        const cardNumber = "1234567890123456";  // Replace with a valid card number for real validation
        const expirationDate = "12/2025";  // Replace with a valid expiration date
    
        processPayment(amount, cardNumber, expirationDate);

        
    } catch (error) {
        console.error(error.message);
    }

    output: Payment processed successfully for amount: 100.5
    
