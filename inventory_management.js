//TASK 1 - Create an Inventory Array of Product Objects:

let inventory = [ 
    {name: "Perfume", price: 55, quantity: 75, lowStockLevel: 20},
    {name: "Body Lotion", price: 25, quantity: 63, lowStockLevel: 15},
    {name: "Candle", price: 30, quantity: 57, lowStockLevel: 10},
    {name: "Shampoo", price: 26, quantity: 65, lowStockLevel: 10},
    {name: "Conditoner", price: 28, quantity: 60, lowStockLevel: 20},
];
// created an array of 5 body care product objects 

console.log(inventory);



//TASK 2 - Create a Function to Display Product Details:

function displayProductDetails(inventory) {

    //used if/else statement to determine the stock status of a product 
    let stockStatus; {
        if (inventory.quantity > inventory.lowStockLevel) 
            stockStatus = "In Stock"; //if the quantity is greater than the lowStockLevel, than product is in stock
        else 
            stockStatus = "Low Stock"//if its not, than that product has a low stock
    };
    
    console.log(`Name: ${inventory.name}`);
    console.log(`Price: ${inventory.price}`);
    console.log(`Quantity: ${inventory.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);

    };

displayProductDetails(inventory[0]);
//output = Name: Perfume, Price: 55, Quantity: 75, Stock Status: In Stock


//TASK 3 - 
