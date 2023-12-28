const accountId = 144553 //Constant value which cannot be changed
let accountEmail = "parthshewale01@gmail.com"

/*
Prefer not to use var 
because of issue in block scope and functional scope
 */

var accountPassword = "12345"
accountCity = "Jaipur"

accountID =2 //this will not get printed as value of accountId is constant 144553

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity ="Bangaluru"


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);