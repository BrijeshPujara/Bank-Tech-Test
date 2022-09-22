class BankStatement {
  constructor(bankAccount) {
    this.account = bankAccount;
  }

  printStatement() {
    return this.#formatStatement();
  }

  // Private function

  #formatStatement() {
    const transaction = this.account.viewTransactions();
    this.total = ["date || credit || debit || balance"];

    for (let i = 0; i < transaction.length; i++) {
      this.total.push(
        `${transaction[i].date}| ${transaction[i].deposit}| ${transaction[i].withdrawal}| ${transaction[i].balance}`
      );
    }
    return this.total;
  }
}

module.exports = BankStatement;
