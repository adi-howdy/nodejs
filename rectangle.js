//export callback: if there is any error then callback will be called
// first parameter would be an error and second will be null as theere is nothing to do
//else if input is ok first paramtere is ok and other parameter would be the actual calc
module.exports = (x,y,callback) => {
    if(x<=0 || y<=0){
        setTimeout(() =>  callback(new Error("error in input"), null),2000);
    }
    else 
    {
        setTimeout(() =>  callback(null, {
            per: () => (2*(x+y)),
            area:  () => (x*y)
        }),2000);

    }
}

