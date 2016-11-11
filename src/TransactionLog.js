"use strict"

function TransactionLog() {
  this._transactions = [];
}

TransactionLog.prototype = {
  _isIntegerOrFloat: function(n) {
    return (Number(n) === n && n % 1 != 0) || Number.isInteger(n)
  },
  _validateParams: function(amount, balance) {
    if(this._isIntegerOrFloat(amount) === false) {
      throw new Error("Transaction value must be a number")
    }
  },
  deposit: function(amount, balance, transactionClass) {
    this._validateParams(amount, balance)
    var transaction = transactionClass ? transactionClass : new Transaction(amount, balance, "credit");
    this._transactions.push(transaction);
  },
  withdraw: function(amount, balance, transactionClass) {
    var transaction = transactionClass ? transactionClass : new Transaction(amount, balance, "debit");
    this._transactions.push(transaction)
  }
}
