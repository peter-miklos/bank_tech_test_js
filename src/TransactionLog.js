"use strict"

function TransactionLog(transactionClass) {
  this._transactionClass = transactionClass ? transactionClass : Transaction;
  this._transactions = [];
}
