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



//TASK 5 - Create calculateInventoryValue function

function calculateInventoryValue(inventory) {

    return inventory.reduce((sum, inventory) => {
        //applyimg reduce method to array sum = callback, inventory =array

        const sumCalculation = inventory.price * inventory.quantity;
        //defining the total of the price and quantity by using multiplication 

        return sum + sumCalculation; }, 0);
        //accumulating the total value by using the callback(sum)
};

let total = calculateInventoryValue(inventory);
//defining total by applying the function to the inventory

console.log(`The total inventory value is $${total}`);
//output = The total inventory value is $6245



//TASK 6 - Create a Function to Process a Sale

function processSale(inventory, productName, unitsSold){
    
    const findProduct = inventory.find(item => item.name === productName);
    //using the find to locate the product name in the inventory array

    if (findProduct) {
        updateStock(findProduct, unitsSold);
        //if able to find product in the inventory than it applies the updateStock function

    }  else {
        console.log(`ERROR: ${productName} is not in the inventory.`);
        //if unable to find product in the inventory than consoles a Error message
    }
};
processSale(inventory, 'Perfume', 0); 
//this is in the inventory so it won't console.log anything, it will only update the stock

processSale(inventory, 'Laptop' , 2 )
//output = ERROR: Laptop is not in the inventory