const BankAccount = require("./bankAccount");

let account = new BankAccount();

describe("Bank Account", () => {
  beforeEach(() => {
    account = new BankAccount();
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("20 Sept 2022 18:00:00 GMT"));
  });
  it("should return empty transactions list", () => {
    expect(account.totalTransactions()).toEqual([]);
  });
  it("should deposit a specified amount into account", () => {
    account.depositAmmount(1000);
    expect(account.totalTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ deposit: 1000 })])
    );
  });
  it("should withdraw a specified amount from the account ", () => {
    account.withdrawalAmmount(500);
    expect(account.totalTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ withdrawal: 500 })])
    );
  });

  it("should display the balance of a transaction", () => {
    account.depositAmmount(1000);
    account.withdrawalAmmount(500);
    expect(account.totalTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ balance: 500 })])
    );
  });

  it("should return the length of transactions", () => {
    account.depositAmmount(2000);
    account.depositAmmount(1000);
    console.log(account.totalTransactions());
    expect(account.totalTransactions().length).toEqual(2);
  });

  it("should provide a breakdown of the transaction history formatted ", () => {
    account.depositAmmount(2000);
    account.withdrawalAmmount(500);
    expect(account.statement()).toEqual([
      "date || credit || debit || balance \n",
      "20/09/2022, 19:00:00| 2000| 0| 2000 \n ",
      "20/09/2022, 19:00:00| 0| 500| 1500 \n ",
    ]);
  });
});
