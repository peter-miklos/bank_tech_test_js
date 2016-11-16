"use strict"

class Transaction {
  constructor(amount, balance, type) {
    this._amount = amount;
    this._balance = balance;
    this._type = type;
    this._date = new Date();
  }
  amount() {
    return this._amount;
  }
  balance() {
    return this._balance;
  }
  type() {
    return this._type;
  }
  date() {
    return this._date;
  }
}
