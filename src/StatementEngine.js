"use strict"

class StatementEngine{
  constructor() {
  }
  _addHeader() {
    return "date || credit || debit || balance\n"
  }
  _addCreditAmount(transaction) {
    return (transaction.type() === "credit") ? (transaction.amount().toFixed(2) + " ") : ""
  }
  _addDebitAmount(transaction) {
    return (transaction.type() === "debit") ? (transaction.amount().toFixed(2) + " ") : ""
  }
  _formatDate(date) {
    var month = date.getMonth() < 10 ? ("0" + date.getMonth()) : date.getMonth()
    var day = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate()
    return day + "/" + month + "/" + date.getFullYear()
  }
  _getSortedTransactions(transactionLog) {
    transactionLog = transactionLog.getTransactions();
    return transactionLog.sort(function(a, b) { return b.date() - a.date()})
  }
  _getTransactionsInString(transactions, self) {
    return transactions.map(function(tr) {
      return self._formatDate(tr.date()) + " || " + self._addCreditAmount(tr) + "|| " + self._addDebitAmount(tr) + "|| " + tr.balance().toFixed(2)
    }).join("\n")
  }
  _addStatementContent(transactionLog) {
    var self = this;
    var transactions = self._getSortedTransactions(transactionLog)
    return self._getTransactionsInString(transactions, self)
  }
  printStatement(transactionLog) {
    var statement = this._addHeader() + this._addStatementContent(transactionLog)
    return statement
  }
}
