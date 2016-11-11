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

  describe("#balance", function() {
    it("returns the new balance after credit transaction booked", function() {
      expect(creditTransaction.balance()).toEqual(300);
    })

    it("returns the new balance after debit transaction booked", function() {
      expect(debitTransaction.balance()).toEqual(250);
    })
  })

  describe("#type", function() {
    it("returns the type of the credit transaction", function() {
      expect(creditTransaction.type()).toEqual("credit");
    })

    it("returns the type of the debit transaction", function() {
      expect(debitTransaction.type()).toEqual("debit");
    })
  })
})
