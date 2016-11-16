"use strict"

class StatementEngine{
  constructor() {
  }
  _addHeader() {
    return "date || credit || debit || balance\n"
  }
  _addCreditAmount(transaction) {
    return (transaction.type() === "credit") ? `${transaction.amount().toFixed(2)} ` : ""
  }
  _addDebitAmount(transaction) {
    return (transaction.type() === "debit") ? `${transaction.amount().toFixed(2)} ` : ""
  }
  _formatDate(date) {
    let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return `${day}/${month}/${date.getFullYear()}`
  }
  _getSortedTransactions(transactionLog) {
    transactionLog = transactionLog.getTransactions();
    return transactionLog.sort((a, b) => b.date() - a.date() );
  }
  _getTransactionsInString(transactions, self) {
    return transactions.map( tr =>
      `${self._formatDate(tr.date())} || ${self._addCreditAmount(tr)}|| ` +
      `${self._addDebitAmount(tr)}|| ${tr.balance().toFixed(2)}`).join("\n")
  }
  _addStatementContent(transactionLog) {
    let self = this;
    let transactions = self._getSortedTransactions(transactionLog)
    return self._getTransactionsInString(transactions, self)
  }
  printStatement(transactionLog) {
    return this._addHeader() + this._addStatementContent(transactionLog)
  }
}
