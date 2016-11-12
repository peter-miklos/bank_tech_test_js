"use strict"

function Account(openingBalance, transactionLog, statementEngine) {
  this._OPENING_BALANCE = 0;
  this._balance = openingBalance ? openingBalance : this._OPENING_BALANCE;
  this._transactionLog = transactionLog ? transactionLog : new TransactionLog;
  this._statementEngine;
}

Account.prototype = {
  deposit: function(amount) {
    var newBalance = this._balance + amount;
    this._transactionLog.deposit(amount, newBalance);
    this._balance = newBalance;
  },
  withdraw: function(amount) {
    var newBalance = this._balance - amount;
    this._transactionLog.withdraw(amount, newBalance);
    this._balance = newBalance;
  },
  printStatement: function() {
    
  }
}
