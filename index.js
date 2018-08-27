/*
var rect = {
    per: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};
*/

var rect = require('./rectangle');

function solve(l,b){
    console.log("solvin " + l + " and " + b)

   rect(l,b , (err,rectangle) => {
       if(err){
           console.error("Error: ", err.message);
       }
       else{
           console.log("area: " + rectangle.area());
           console.log("perimeter: " + rectangle.per());
       }
   });
   console.log("delay after callback");
}

solve(2,3);
solve(0,2);