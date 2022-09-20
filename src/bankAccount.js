class BankAccount {
  constructor() {
    this.amount = 0;
    this.transactions = [];
  }

  depositAmmount(deposit) {
    this.amount += deposit;
    const new_transaction = {
      deposit: deposit,
      withdrawal: 0,
      balance: this.amount,
      date: new Date().toLocaleString(),
    };

    this.transactions.push(new_transaction);
  }

  withdrawalAmmount(withdrawal) {
    this.amount -= withdrawal;
    const new_transaction = {
      deposit: 0,
      withdrawal: withdrawal,
      balance: this.amount,
      date: new Date().toLocaleString(),
    };

    this.transactions.push(new_transaction);
  }

  totalTransactions() {
    return this.transactions;
  }

  statement() {
    let total = ["date || credit || debit || balance \n"];
    for (let i = 0; i < this.transactions.length; i++) {
      const trans = this.transactions[i];
      total.push(
        `${trans.date}| ${trans.deposit}| ${trans.withdrawal}| ${trans.balance} \n `
      );
    }
    return total;
  }
}

module.exports = BankAccount;

// const account = new BankAccount();
// account.depositAmmount(1000);
// account.withdrawalAmmount(500);

// console.log(account.statement());

// account.depositAmmount(254.99)

// console.log(account.statement());
