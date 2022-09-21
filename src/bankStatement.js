const BankAccount = require("./bankAccount");

class BankStatement {
  constructor(bankAccount) {
    this.account = bankAccount;
  }

  printStatement() {
    return this.#formatStatement();
  }
    
// Private function

  #formatStatement() {
    const transaction = this.account.totalTransactions();
    this.total = ["date || credit || debit || balance"];

    for (let i = 0; i < transaction.length; i++) {
      const trans = transaction[i];
      this.total.push(
        `${trans.date}| ${trans.deposit}| ${trans.withdrawal}| ${trans.balance}`
      );
    }
    return this.total;
  }
}

module.exports = BankStatement;

const acc = new BankAccount();


const arr1 = new BankStatement(acc);
acc.depositAmount(1000);
acc.depositAmount(2000);
acc.withdrawalAmount(500);
console.log(arr1.printStatement());
