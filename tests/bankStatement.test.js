const BankStatement = require("../src/bankStatement");
const BankAccount = require("../src/bankAccount");

describe("Bank Statement", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("23 Sept 2022"));
  });

  it("should provide a breakdown of the transaction history formatted in reverse chronological order ", () => {
    const account = new BankAccount();
    const statement = new BankStatement(account);
    account.depositAmount(2000);
    account.withdrawalAmount(500);
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "23/09/2022|| ||0|| ||500.00|| ||1500.00",
      "23/09/2022|| ||2000.00|| ||0|| ||2000.00",
    ]);
  });
});
