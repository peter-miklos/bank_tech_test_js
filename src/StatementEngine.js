"use strict"

function StatementEngine() {

}

StatementEngine.prototype = {
  _addHeader: function() {
    return "date || credit || debit || balance\n"
  },
  _addCreditAmount: function(transaction) {
    return (transaction.type() === "credit") ? (transaction.amount().toFixed(2) + " ") : ""
  },
  _addDebitAmount: function(transaction) {
    return (transaction.type() === "debit") ? (transaction.amount().toFixed(2) + " ") : ""
  },
  _formatDate: function(date) {
    var month = date.getMonth() < 10 ? ("0" + date.getMonth()) : date.getMonth()
    var day = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate()
    return day + "/" + month + "/" + date.getFullYear()
  },
  _addStatementContent: function(transactionLog) {
    var transactions = transactionLog.getTransactions();
    transactions = transactions.sort(function(a, b) { return b.date() - a.date()})
    var self = this
    transactions = transactions.map(function(tr) {
      return self._formatDate(tr.date()) + " || " + self._addCreditAmount(tr) + "|| " + self._addDebitAmount(tr) + "|| " + tr.balance().toFixed(2)
    }).join("\n")
    return transactions
  },
  printStatement: function(transactionLog) {
    var statement = this._addHeader() + this._addStatementContent(transactionLog)
    return statement
  }
}
