# Cash Register
## Description
This code is an algorithm for determining if the cash in a register is enough to pay the difference between the inputed cash and the price of an item in exact change.  If there isn't enough in the register or isn't exact change, the algorithm will return 'INSUFFICIENT_FUNDS'.  If there is exact change, the algorithm will either return 'OPEN' or 'CLOSED' depending on if there's anything left in the register, and will also return a 2D array containing the exact change.
## Instructions
In order to use this function, just call the function `checkCashRegister(args)` with `price`, `cash`, and a 2D array in the format presented at the bottom of the `cash-register.js` file as the parameters.