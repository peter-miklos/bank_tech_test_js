"use strict"

describe("TransactionLog", function() {
  var transactionLog;
  var transactionClass;
  var transaction;

  beforeEach(function() {
    transactionClass = jasmine.createSpyObj("transactionClass", ["amount"])
    transactionLog = new TransactionLog
  })

  it("create credit transaction and add it to transactions array", function() {
    transactionLog.deposit(200, 700, transactionClass)
    expect(transactionLog._transactions.length).toEqual(1)
  })

  it("create debit transaction and add it to transactions array", function() {
    transactionLog.withdraw(100, 500, transactionClass)
    expect(transactionLog._transactions.length).toEqual(1)
  })
})
