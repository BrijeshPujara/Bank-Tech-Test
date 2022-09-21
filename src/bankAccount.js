class BankAccount {
  constructor() {
    this.amount = 0;
    this.transactions = [];
  }

  depositAmount(deposit) {
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

  withdrawalAmount(withdrawal) {
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
    return this.transactions.reverse();
  }

  // Private functions
}

module.exports = BankAccount;

// const account = new BankAccount();
// account.depositAmount(1000);
// account.depositAmount(2000);
// account.withdrawalAmount(500);

// console.log(account.totalTransactions());
