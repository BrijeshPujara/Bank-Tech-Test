# Bank tech test

- Test Driven Development - (Jest - Jest Coverage)
- ESLint
- NodeJS
- Version Control(Git)

## Specification

### User Story
```
As a client
So I can get to see my banking transactions
I want to able to deposit money into my account.

As a client
So I can get to see my banking transactions
I want to able to withdraw money from my account.

As a client
I want to able to see my transactional history.
```

### Design
```javascript
// Class name
class BankAccount {}

// Deposit
function depositAmount(deposit) {}

// Withdraw
function withdrawalAmount(withdrawal) {}

// Statement
function statement {}
```

Expected behavior

```javascript
const account = new BankAccount()
account.deposit(1000)
account.deposit(2000)
account.withdraw(500)

account.statement() =>   [
  'date || credit || debit || balance \n',
  '21/09/2022, 10:14:56| 1000.00| 0| 1000.00 \n ',
  '21/09/2022, 10:14:56| 2000.00| 0| 3000.00 \n ',
  '21/09/2022, 10:14:56| 0| 500.00| 2500.00 \n '
]
```

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Installation

1. Clone Repository

```sh
git clone https://github.com/BrijeshPujara/Bank-Tech-Test.git
```

2. Install dependencies

```sh
npm install
```

3. Run tests

```sh
npm run test
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
