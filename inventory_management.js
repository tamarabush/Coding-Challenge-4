//TASK 1 - Create an Inventory Array of Product Objects:

let inventory = [ 
    {name: "Perfume", price: 55, quantity: 75, lowStockLevel: 20},
    {name: "Body Lotion", price: 25, quantity: 9, lowStockLevel: 15},
    {name: "Candle", price: 30, quantity: 57, lowStockLevel: 10},
    {name: "Shampoo", price: 26, quantity: 5, lowStockLevel: 10},
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

displayProductDetails(inventory[0]); //0 represents which product (perfume)
//output = Name: Perfume, Price: 55, Quantity: 75, Stock Status: In Stock



//TASK 3 - Create a Function to Update Product Stock After Sales:

function updateStock(inventory, unitsSold) {
    let stockInquiry = inventory.quantity -= unitsSold; //subtract unitsSold from quantity 
    
    if (stockInquiry === 0) {
        return (`${inventory.name} is out of stock.`);
        // if quantity is 0 or less than product is out of stock

    } else if (stockInquiry < inventory.lowStockLevel) {
        return (`${inventory.name} is low on stock.`);
        // if quantity is less than lowStockLevel than product is low on stock
    }
      else
        return(`${inventory.name} is in stock.`)
        // if it doesn't apply to any above than its in stock
};

console.log(updateStock(inventory[1], 65)); //65 represents unitSold 
//Output = "Candle is low on stock."



//TASK 4 - Create a Function to Check Low Stock Products:
function checkLowStock (inventory) {

    inventory.forEach(inventory => {
        //apply for each method to inventory so it can iterate over the array

        if(inventory.quantity < inventory.lowStockLevel) {
            //apply if method to check if quantity is lower than lowStockLevel

            console.log (`${inventory.name} is low on stock`); }
            // console log the products that are low on stock 
    });
}

checkLowStock(inventory);
//output = Body Lotion is low on stock, Shampoo is low on stock