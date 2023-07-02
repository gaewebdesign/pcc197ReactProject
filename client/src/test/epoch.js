// convert epoch to date


//let dt = Date().valueOf()



let e = Math.floor(new Date()/1000)


let epoch= "" + e
console.log( epoch )

t = new Date(0)
t.setUTCSeconds(epoch)

var month = t.getUTCMonth() + 1; //months from 1-12
var day = t.getUTCFullYear()
month = t.toLocaleString('default', { month: 'long' });

var day = t.getUTCDate();
var year = t.getUTCFullYear();

console.log( month + " " + day + " " + year )