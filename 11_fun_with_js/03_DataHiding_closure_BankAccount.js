function createBankAccount(initBalance){
    let balance = initBalance;
    return {
        deposit: function(amount){
            balance += amount;
            return balance;
        },
        withdraw: function(amount){
            if(amount <= balance){
                balance -= amount;
                return balance;
            }else{
                return "Insufficient funds";
            }
        },
        checkBalance: function() {
          return balance;
        }
    }
}


const myAccount = createBankAccount(1000);

console.log(myAccount.deposit(500));  // 1500
console.log(myAccount.withdraw(200)); // 1300
console.log(myAccount.balance);   // undefined