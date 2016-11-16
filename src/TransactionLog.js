"use strict"

class TransactionLog {
  constructor() {
    this._transactions = [];
  }
  _isIntegerOrFloat(n) {
    return (Number(n) === n && n % 1 != 0) || Number.isInteger(n)
  }
  _validateParams(amount, balance) {
    if(this._isIntegerOrFloat(amount) === false)
      throw new Error("Transaction value must be a number")
    if(amount <= 0) throw new Error("Transaction value must be higher than zero")
    if(balance < 0) throw new Error("Balance cannot be negative")
  }
  deposit(amount, balance, transactionClass) {
    this._validateParams(amount, balance)
    let transaction = transactionClass ? transactionClass : new Transaction(amount, balance, "credit");
    this._transactions.push(transaction);
  }
  withdraw(amount, balance, transactionClass) {
    this._validateParams(amount, balance)
    let transaction = transactionClass ? transactionClass : new Transaction(amount, balance, "debit");
    this._transactions.push(transaction)
  }
  getTransactions() {
    return this._transactions.copyWithin()
  }
}
