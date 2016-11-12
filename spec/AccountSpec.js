"use strict"

describe("Account", function() {
  var transactionLog;
  var statementEngine;
  var account1;
  var account2;

  beforeEach(function() {
    transactionLog = {deposit: function(amount) { return amount }}
    statementEngine = jasmine.createSpy("statementEngine");
    account1 = new Account(0, transactionLog, statementEngine);
    spyOn(transactionLog, "deposit");
  })

  describe("#deposit", function() {
    it("calls the deposit method on transaction_log", function() {
      account1.deposit(200)
      expect(transactionLog.deposit).toHaveBeenCalled();
    })

    it("adds the amount to the current balance", function() {
      account1.deposit(199);
      expect(account1._balance).toEqual(199)
    })
  })

  describe("#withdraw", function() {

  })

  describe("#print_statement", function() {

  })
})
