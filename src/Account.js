"use strict"

const _OPENING_BALANCE = 0;

class Account {
  constructor(openingBalance = _OPENING_BALANCE, transactionLog = new TransactionLog, statementEngine = new StatementEngine) {
    this._balance = openingBalance;
    this._transactionLog = transactionLog;
    this._statementEngine = statementEngine;
  }
  deposit(amount) {
    let newBalance = this._balance + amount;
    this._transactionLog.deposit(amount, newBalance);
    this._balance = newBalance;
  }
  withdraw(amount) {
    let newBalance = this._balance - amount;
    this._transactionLog.withdraw(amount, newBalance);
    this._balance = newBalance;
  }
  printStatement() {
    return this._statementEngine.printStatement(this._transactionLog)
  }
}
