"use strict"

function TransactionLog() {
  this._transactions = [];
}

TransactionLog.prototype = {
  deposit: function(amount, balance, transactionClass) {
    var transaction = transactionClass ? transactionClass : new Transaction(amount, balance, "credit");
    this._transactions.push(transaction);
  },
  withdraw: function(amount, balance, transactionClass) {
    var transaction = transactionClass ? transactionClass : new Transaction(amount, balance, "debit");
    this._transactions.push(transaction)
  }
}
