class BankAccount {
  constructor() {
    this.amount = 0;
    this.transactions = [];
  }

  depositAmmount(deposit) {
    if (deposit == null) {
      throw new Error("Please enter deposit amount");
    } else {
      this.amount += deposit;
      const new_transaction = {
        deposit: deposit.toFixed(2),
        withdrawal: 0,
        balance: this.amount.toFixed(2),
        date: new Date().toLocaleString(),
      };
      this.transactions.push(new_transaction);
    }
  }

  withdrawalAmmount(withdrawal) {
    if (withdrawal == null) {
      throw new Error("Please enter withdrawal amount");
    } else {
      this.amount -= withdrawal;
      const new_transaction = {
        deposit: 0,
        withdrawal: withdrawal.toFixed(2),
        balance: this.amount.toFixed(2),
        date: new Date().toLocaleString(),
      };
      this.transactions.push(new_transaction);
    }
  }

  totalTransactions() {
    return this.transactions;
  }

  statement() {
    return this.#statementList();
  }

  // Private functions

  #statementList() {
    this.total = ["date || credit || debit || balance \n"];
    for (let i = 0; i < this.transactions.length; i++) {
      const trans = this.transactions[i];
      this.total.push(
        `${trans.date}| ${trans.deposit}| ${trans.withdrawal}| ${trans.balance} \n `
      );
    }
    return this.total;
  }
}

module.exports = BankAccount;

// const account = new BankAccount();
// account.depositAmmount();
// account.depositAmmount(2000);
// account.withdrawalAmmount(500);

// console.log(account.statement());
