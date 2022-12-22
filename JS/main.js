//While Loop//
let text = ""//Defining a Let and naming it
let i = 0;//Defining the start 0

do {
    text += "<br> The number is" + i;
    i++;
}
while (i < 10);//Defining the end 10

document.getElementById("demo").innerHTML = text;//Putting the result with the name text
//End While Loop//

//For Loop//
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];//Defining  the const in cars

let text2 = "";//defining the let Text2
for (let i = 0; i < cars.length; i++) {//using for 
    text2 += cars[i] + "<br>";
}

document.getElementById("for_loop").innerHTML = text2;//Putting the results into HTML with the element "For_Loop" and id
//End For Loop//

//function Array//
const cars2 = ["Saab", "Volvo", "BMW"];// the const with the name "cars2"
document.getElementById("Array").innerHTML = cars2;//Putting the results with the element "Array"
//End Function Array//

//Let Keyword//
var X = 10;
//here x is 10

{
 var X = 2;
//here x is 2
}

//here x is 2
document.getElementById("Let_Keywords").innerHTML = X;
//End Let Keyword//