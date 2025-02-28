/* Prompt to enter flavors */

let str = prompt("Enter the Froyo flavors that you would like. Seperate each one with a comma");

/* Split the flavors */
let order = str.split(",");

/* Show the flavors in a table */
console.table(order);

/* Count Each Flavor */ 

let flavorCount = {};  

order.forEach(flavor => {
    if (flavorCount[flavor]) {
        flavorCount[flavor]++; 
    } else {
        flavorCount[flavor] = 1; 
    }
});

console.table(flavorCount);