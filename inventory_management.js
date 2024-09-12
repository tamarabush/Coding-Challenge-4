//TASK 1 - Create an Inventory Array of Product Objects:

let inventory = [ 
    {name: "Perfume", price: 55, quantity: 75, lowStockLevel: 20},
    {name: "Body Lotion", price: 25, quantity: 63, lowStockLevel: 15},
    {name: "Candle", price: 30, quantity: 57, lowStockLevel: 10},
    {name: "Shampoo", price: 26, quantity: 65, lowStockLevel: 10},
    {name: "Conditoner", price: 28, quantity: 60, lowStockLevel: 20},
];//created an array of 5 body care product objects 

console.log(inventory);
//if you can't see the output please use the html page and look at the console there.



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



//TASK 3 - Create a Function to Update Product Stock After Sales

function updateStock(inventory, unitsSold) {
    inventory.quantity -= unitsSold; //subtract unitsSold from quantity 
    stockInquiry = inventory.quantity < 0 ? 0 : inventory.quantity; 
    //applied ternary operator to check if quantity is below 0

    if (inventory.quantity === 0) {
        return (`${inventory.name} is out of stock.`);
        // if quantity is 0 or less than product is out of stock

    } else if (inventory.quantity < inventory.lowStockLevel) {
        return (`${inventory.name} is low on stock.`);
        // if quantity is less than l;owStockLevel than product is low on stock
    }
};

console.log(updateStock(inventory[2], 65));
//Output = "Candle is low on stock."
