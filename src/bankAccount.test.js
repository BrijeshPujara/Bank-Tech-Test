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
  it("should deposit 1000 into account", () => {
    account.depositAmmount(1000);
    expect(account.totalTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ deposit: "1000.00" })])
    );
  });
  it("should withdraw 500 from the account ", () => {
    account.depositAmmount(1000);
    account.withdrawalAmmount(500);
    expect(account.totalTransactions()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ withdrawal: "500.00" }),
      ])
    );
  });

  it("should display the balance of a transaction", () => {
    account.depositAmmount(1000);
    account.withdrawalAmmount(500);
    expect(account.totalTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ balance: "500.00" })])
    );
  });

  it("should return the length of transactions", () => {
    account.depositAmmount(2000);
    account.depositAmmount(1000);
    console.log(account.totalTransactions());
    expect(account.totalTransactions().length).toEqual(2);
  });

  it("should throw an error when there is no deposit amount entered ", () => {
    try {
      account.depositAmmount();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Please enter deposit amount");
    }
  });

  it('should throw an error when there is no withdrawal amount entered ', () => {
    try {
      account.withdrawalAmmount();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Please enter withdrawal amount");
    }
    
  });

  it("should provide a breakdown of the transaction history formatted ", () => {
    account.depositAmmount(2000);
    account.withdrawalAmmount(500);
    expect(account.statement()).toEqual([
      "date || credit || debit || balance \n",
      "20/09/2022, 19:00:00| 2000.00| 0| 2000.00 \n ",
      "20/09/2022, 19:00:00| 0| 500.00| 1500.00 \n ",
    ]);
  });
});
