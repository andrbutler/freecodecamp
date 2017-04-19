function checkCashRegister(price, cash, cid) {
  var totalCid = 0;
  var formatChange = [];
  var change =[["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], 
              ["DIME", 0] , ["NICKEL", 0], ["PENNY", 0]];
  for(var i = 0; i<cid.length; i++){
    totalCid += Math.round(cid[i][1] * 100);
    cid[i][1] = Math.round(cid[i][1] * 100);
  }
  var totalChange = (cash * 100) - (price * 100);
  if(totalCid < totalChange){
    return 'Insufficient Funds';
  }
  if(totalCid == totalChange){
    return 'Closed';
  }
  while(totalChange > 0){
    if(totalChange >= 10000 && cid[8][1] > 0){
      totalChange = totalChange - 10000;
      cid[8][1] = cid[8][1] - 10000;
      change[0][1] = change[0][1] + 10000;
    }else  if(totalChange >= 2000 && cid[7][1] > 0){
      totalChange = totalChange - 2000;
      cid[7][1] = cid[7][1] - 2000;
      change[1][1] = change[1][1] + 2000;
    }else  if(totalChange >= 1000 && cid[6][1] > 0){
      totalChange = totalChange - 1000;
      cid[6][1] = cid[6][1] - 1000;
      change[2][1] = change[2][1] + 1000;
    }else  if(totalChange >= 500 && cid[5][1] > 0){
      totalChange = totalChange - 500;
      cid[5][1] = cid[5][1] - 500;
      change[3][1] = change[3][1] + 500;
    }else  if(totalChange >= 100 && cid[4][1] > 0){
      totalChange = totalChange - 100;
      cid[4][1] = cid[4][1] - 100;
      change[4][1] = change[4][1] + 100;
    }else  if(totalChange >= 25 && cid[3][1] > 0){
      totalChange = totalChange - 25;
      cid[3][1] = cid[3][1] - 25;
      change[5][1] = change[5][1] + 25;
    }else  if(totalChange >= 10 && cid[2][1] > 0){
      totalChange = totalChange - 10;
      cid[2][1] = cid[2][1] - 10;
      change[6][1] = change[6][1] + 10;
    }else  if(totalChange >= 5 && cid[1][1] > 0){
      totalChange = totalChange - 5;
      cid[1][1] = cid[1][1] - 5;
      change[7][1] = change[7][1] + 5;
    }else  if(totalChange >= 1 && cid[0][1] > 0){
      totalChange = totalChange - 1;
      cid[0][1] = cid[0][1] - 1;
      change[8][1] = change[8][1] + 1;
    }else if(totalChange === 0){
       break;
     }else{
      return 'Insufficient Funds';
     }
  }
  for(var x in change){
    if(change[x][1] !== 0){
      change[x][1] = Number.parseFloat((change[x][1] / 100).toFixed(2));
      formatChange.push(change[x]);
    }
  }
  return formatChange;
}