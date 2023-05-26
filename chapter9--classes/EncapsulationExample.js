// credit +
// debint -

// Imperative
// provide both bankAccount and amount
// can happen error in providing
function credit(bankAccount, amount) {
  bankAccount.balance += amount;
}

// OOP
// internal data is keep within its object
class BankAccount {
  constructor() {
    this.balance = 0;
  }
  credit(amount) {
    if (amount >= 0) {
      this.balance += amount;
    }
  }
  debit(amount) {
    // prevent invalid operation - maintain valid state
    if (this.balance >= amount && amount > 0) {
      this.balance -= amount;
    }
  }
  toString() {
    return 'Account[' + this.balance + ']';
  }
}

let account1 = new BankAccount();
account1.credit(2000);
// account1.debit(-200); // balance 2200
// invalid operation
account1.debit(200);

console.log('Account1', account1);
