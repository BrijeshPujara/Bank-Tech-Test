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
        date: new Date().toLocaleDateString(),
      };
      this.transactions.push(new_transaction);
    }
  }

  withdrawalAmount(withdrawal) {
    if (withdrawal == null || this.amount < withdrawal) {
      throw new Error("Please enter a valid withdrawal amount");
    } else {
      this.amount -= withdrawal;
      const new_transaction = {
        deposit: 0,
        withdrawal: withdrawal.toFixed(2),
        balance: this.amount.toFixed(2),
        date: new Date().toLocaleDateString(),
      };
      this.transactions.push(new_transaction);
    }
  }

  viewTransactions() {
    return this.transactions.reverse();
  }
}

module.exports = BankAccount;
