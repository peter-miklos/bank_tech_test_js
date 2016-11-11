"use strict"

describe("Transaction", function() {
  var creditTransaction;
  var debitTransaction;

  beforeEach(function() {
    creditTransaction = new Transaction(100, 300, "credit")
    debitTransaction = new Transaction(50, 250, "debit")
  })

  describe("#amount", function() {
    it("returns the value of the credit transaction", function() {
      expect(creditTransaction.amount()).toEqual(100);
    })

    it("returns the value of the debit transaction", function() {
      expect(debitTransaction.amount()).toEqual(50);
    })
  })
})
