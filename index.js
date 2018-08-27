/*
var rect = {
    per: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};
*/

var rect = require('./rectangle');

function solve(l,b){
    console.log("solvin log " + l + " and " + b)

    if(l<=0 || b<=0){
        console.log("error in input")
    }
    else 
    {
        console.log("area " + rect.area(l,b))
        console.log("per: " + rect.per(l,b))
    }
}

solve(2,3);
solve(0,2);