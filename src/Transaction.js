"use strict"

function Transaction(amount, balance, type) {
  this._amount = amount;
  this._balance = balance;
  this._type = type;
}

Transaction.prototype = {
  amount: function() {
    return this._amount;
  }
}
