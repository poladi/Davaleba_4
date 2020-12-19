// //Exercise - Lunar Countdown
var x = 10;
while (x >0) {
  alert(x);
  x--;
if(x==0){
    alert("Blast Off!")
}
}

//Iterate with a for loop
let products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];
for (let i = 0 ; i<products.length; i++ ){
    console.log(products[i]);
};


//Pizza Exercise
let toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
function makePizza(x){
console.log("A tasty pizza with "+ x.join(" and ") + ".");
return x;
}

let str2 = makePizza(toppings);


//Capitalise every element
let array2 = ["melon","banana","apple","orange","lemon"];
let uppercased = array2.map(name => name.toUpperCase());
console.log(uppercased);
alert(uppercased);