const BankAccount = require("../src/bankAccount");

let account = new BankAccount();

describe("Bank Account", () => {
  beforeEach(() => {
    account = new BankAccount();
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("20 Sept 2022 18:00:00 GMT"));
  });

  it("should return empty transactions list", () => {
    expect(account.viewTransactions()).toEqual([]);
  });
  it("should deposit 1000 into account", () => {
    account.depositAmount(1000);
    expect(account.viewTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ deposit: "1000.00" })])
    );
  });
  it("should withdraw 500 from the account ", () => {
    account.depositAmount(1000);
    account.withdrawalAmount(500);
    expect(account.viewTransactions()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ withdrawal: "500.00" }),
      ])
    );
  });

  it("should display the balance of a transaction", () => {
    account.depositAmount(1000);
    account.withdrawalAmount(500);
    expect(account.viewTransactions()).toEqual(
      expect.arrayContaining([expect.objectContaining({ balance: "500.00" })])
    );
  });

  it("should return the length of transactions", () => {
    account.depositAmount(2000);
    account.depositAmount(1000);
    console.log(account.viewTransactions());
    expect(account.viewTransactions().length).toEqual(2);
  });

  it("should throw an error when there is no deposit amount entered ", () => {
    try {
      account.depositAmount();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Please enter deposit amount");
    }
  });

  it("should throw an error when there is no withdrawal amount entered ", () => {
    try {
      account.withdrawalAmount();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Please enter a valid withdrawal amount");
    }
  });

  
});
