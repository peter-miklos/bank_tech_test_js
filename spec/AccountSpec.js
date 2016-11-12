"use strict"

describe("Account", function() {
  var transactionLog;
  var statementEngine;
  var account1;
  var account2;

  beforeEach(function() {
    transactionLog = jasmine.createSpyObj("transactionLog", ['deposit', 'withdraw'])
    statementEngine = jasmine.createSpyObj("statementEngine", ['printStatement']);
    account1 = new Account(0, transactionLog, statementEngine);
    account2 = new Account(300, transactionLog, statementEngine);
  })

  describe("#deposit", function() {
    it("calls the deposit method on transactionLog", function() {
      account1.deposit(200)
      expect(transactionLog.deposit).toHaveBeenCalled();
    })

    it("adds the amount to the current balance", function() {
      account1.deposit(199);
      expect(account1._balance).toEqual(199)
    })
  })

  describe("#withdraw", function() {
    it("calls the withdraw method on transactionLog", function() {
      account2.withdraw(10);
      expect(transactionLog.withdraw).toHaveBeenCalled();
    })

    it("deducts the amount from the current balance", function() {
      account2.withdraw(50);
      expect(account2._balance).toEqual(250)
    })
  })

  describe("#printStatement", function() {
    it("calls the printStatement method on StatementEngine", function() {
      account1.printStatement()
      expect(statementEngine.printStatement).toHaveBeenCalled();
    })

    it("returns the value received from StatementEngine", function() {
      statementEngine.printStatement.and.returnValue("Statement content");
      expect(account1.printStatement()).toEqual("Statement content")
    })
  })
})
