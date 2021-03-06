"use strict"

describe("TransactionLog", function() {
  var transactionLog;
  var transactionClass;
  var transaction;

  beforeEach(function() {
    transactionClass = jasmine.createSpyObj("transactionClass", ["amount"])
    transactionLog = new TransactionLog
  })

  describe("#deposit", function() {
    it("create credit transaction and add it to transactions array", function() {
      transactionLog.deposit(200, 700, transactionClass)
      expect(transactionLog._transactions.length).toEqual(1)
    })

    it("raises error if amount is not an integer", function() {
      expect(function() {
        transactionLog.deposit("200", 700, transactionClass)
      }).toThrowError("Transaction value must be a number")
    })

    it("raises error if amount is equal or less than zero", function() {
      expect(function() {
        transactionLog.deposit(0, 300, transactionClass)
      }).toThrowError("Transaction value must be higher than zero")
    })
  })

  describe("#withdraw", function() {
    it("create debit transaction and add it to transactions array", function() {
      transactionLog.withdraw(100, 500, transactionClass)
      expect(transactionLog._transactions.length).toEqual(1)
    })

    it("raises error if amount is not an integer", function() {
      expect(function() {
        transactionLog.withdraw("200", 500, transactionClass)
      }).toThrowError("Transaction value must be a number")
    })

    it("raises error if amount is equal or less than zero", function() {
      expect(function() {
        transactionLog.withdraw(0, 300, transactionClass)
      }).toThrowError("Transaction value must be higher than zero")
    })

    it("raises error if balance is less than zero", function() {
      expect(function(){
        transactionLog.withdraw(50.50, -20, transactionClass)
      }).toThrowError("Balance cannot be negative")
    })
  })

  describe("#getTransactions", function() {
    it("returns a copy of transactions", function() {
      transactionClass.amount.and.returnValue(205)
      transactionLog.deposit(205, 705, transactionClass)
      var transactions = transactionLog.getTransactions()
      expect(transactions[0].amount()).toEqual(205)
    })
  })
})
