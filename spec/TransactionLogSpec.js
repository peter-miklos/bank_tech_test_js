"use strict"

describe("TransactionLog", function() {
  var transactionLog;
  var transactionClass;
  var transaction;

  beforeEach(function() {
    transactionClass = jasmine.createSpyObj("transactionClass", ["new"])
    transactionLog = new TransactionLog(transactionClass)
  })

  it("create credit transaction and add it to transactions array", function() {
    transactionLog.deposit(200, 700)
    expect(transactionLog._transactions.length).toEqual(1)
  })
})
