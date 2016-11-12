"use strict"

describe("StatementEngine", function() {

  var statementEngine;
  var transactionLog;
  var transaction1;
  var transaction2;

  beforeEach(function() {
    statementEngine = new StatementEngine();
    transaction1 = {
      amount: function() { return 200 },
      type: function() { return "credit"},
      date: function() { return new Date("2016", "06", "11") },
      balance: function() { return 650 }
    }
    transaction2 = {
      amount: function() { return 50 },
      type: function() { return "debit"},
      date: function() { return new Date("2016", "08", "19") },
      balance: function() { return 450 }
    }
    transactionLog = { getTransactions: function() { return [transaction1, transaction2]}}
  })

  describe("#printStatement", function() {
    it("returns the statement with header", function() {
      var result = "date || credit || debit || balance\n19/08/2016 || || 50.00 || 450.00\n11/06/2016 || 200.00 || || 650.00"
      expect(statementEngine.printStatement(transactionLog)).toEqual(result);
    })
  })
})
