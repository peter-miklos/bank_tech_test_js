Bank Tech Test in Javascript
=================

Description:
-------
The program acts as a simple account keeping solution. It lets user to create an account, make debit and credit transactions, and print a statement. The program manages the current balance as well.

### Instructions for how to run the program

```
$ git clone https://github.com/peter-miklos/bank_tech_test_js.git
$ open SpecRunner.html
```
Use Chrome Console to interact with the code.
User stories
-------
```
As a User
So that I can manage my financials
I want to open an account

As a User
So that I can use the money on my account
I want to make credit and debit transactions

As a User
So that I can plan my future spending and check transaction history
I want to see an account statement
```

Tests
-------
### Feature tests
The program's main features are tested in Chrome Console:
```
TBD
```
### Unit tests
The following unit tests are used:
```
Account
  #deposit
    calls the deposit method on transactionLog
    adds the amount to the current balance
  #withdraw
    calls the withdraw method on transactionLog
    deducts the amount from the current balance
  #printStatement
    calls the printStatement method on StatementEngine
    returns the value received from StatementEngine
StatementEngine
  #printStatement
    returns the statement with header
Transaction
  #amount
    returns the value of the credit transaction
    returns the value of the debit transaction
  #balance
    returns the new balance after credit transaction booked
    returns the new balance after debit transaction booked
  #type
    returns the type of the credit transaction
    returns the type of the debit transaction
  #date
    returns the date of the credit transaction
    returns the date of the debit transaction
TransactionLog
  #deposit
    create credit transaction and add it to transactions array
    raises error if amount is not an integer
    raises error if amount is equal or less than zero
  #withdraw
    create debit transaction and add it to transactions array
    raises error if amount is not an integer
    raises error if amount is equal or less than zero
    raises error if balance is less than zero
  #getTransactions
    returns a copy of transactions
```
