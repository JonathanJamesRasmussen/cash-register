function checkCashRegister(price, cash, cid) {
    let change;
    let total = calculateTotalCid(cid) 
    if (total < cash - price) {
      return {
        status: 'INSUFFICIENT_FUNDS',
        change: []
      };
    } else if (total == cash - price) {
      return {
        status: 'CLOSED',
        change: [...cid]
      };
    } else {
      return getChange(price, cash, cid);
    }
  
    function calculateTotalCid(cid) {
      let total = 0;
      for (let i = 0; i < cid.length; i++) {
        total += cid[i][1];
      }
      return total;
    }
  
    function getChange(price, cash, cid) {
      let moneyTypes = [
        {name: 'ONE HUNDRED', value: 100},
        {name: 'TWENTY', value: 20},
        {name: 'TEN', value: 10},
        {name: 'FIVE', value: 5},
        {name: 'ONE', value: 1},
        {name: 'QUARTER', value: 0.25},
        {name: 'DIME', value: 0.1},
        {name: 'NICKEL', value: 0.05},
        {name:'PENNY', value: 0.01}
      ];
      let changeDue = cash - price;
      let reverseCid = cid.reverse();
      let changeArr = [];
        for (let i = 0; i < moneyTypes.length; i++) {
          let counter = 0;
          if (changeDue == 0) { break; }
          while (changeDue % moneyTypes[i].value < changeDue && reverseCid[i][1] > 0) {
            changeDue -= moneyTypes[i].value;
            reverseCid[i][1] -= moneyTypes[i].value;
            counter += moneyTypes[i].value;
            changeDue = parseFloat(changeDue.toFixed(2));
          }
          if (counter > 0) {
            changeArr.push([moneyTypes[i].name, counter]);
          }
        }
      if (changeDue == 0) {
        return {
          status: 'OPEN',
          change: changeArr
        };
      } else {
        return {
          status: 'INSUFFICIENT_FUNDS',
          change: []
        };
      }
    }  
  }
  
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]