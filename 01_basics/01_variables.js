const accountId = 14453
let accountEmail = "laxman@gmail.com"
var accountPassword = "12345"
accountCity = "Dehradun"
let accountState;

//accountId = 2  // not allowed
accountEmail = "laxu@gmail.com"
accountPassword="1111"
accountCity="pune"

console.log(accountId);
/*
  prefer not to use var
  because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountState])