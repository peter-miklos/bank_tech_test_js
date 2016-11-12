"use strict"

describe("Account", function() {
  var transactionLog;
  var statementEngine;
  var account1;
  var account2;

  beforeEach(function() {
    transactionLog = {
      deposit: function(amount) { return amount },
      withdraw: function(amount) { return amount }
    }
    statementEngine = jasmine.createSpy("statementEngine");
    account1 = new Account(0, transactionLog, statementEngine);
    account2 = new Account(300, transactionLog, statementEngine);
    spyOn(transactionLog, "deposit");
    spyOn(transactionLog, "withdraw");
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

  describe("#print_statement", function() {

  })
})
