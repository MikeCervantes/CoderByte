function ClosestEnemyII(strArr) {
    //step one - return 0 if there is no 2 in the array
    let twosies = strArr.filter(val => {
      return val.includes("2");
    });
    if (!twosies.length) {
      return 0;
    }
    //step two - get the coordinates of the 1 (targetX, targetY)
    targetY = strArr.findIndex(val => {
      return val.includes('1');
    });
    targetX = strArr[targetY].search(/1/);
    //step three find the smallest path to a 2
    let res = strArr.length * strArr[0].length;
  
    for (let row = 0, len = strArr[0].length; row < len; row++) {
      for (col = 0, height = strArr.length; col < height; col++) {
        if (strArr[row][col] === '2') {
          xShift = rowDist(targetX, col, len);
          yShift = rowDist(targetY, row, height);
          res = Math.min(res, xShift + yShift);
        }
      }
    }
    return res;
  
  }
  
  //--------------------helpers----------------------
  //despite the name, use for column and row distance
  function rowDist(y, x, len) {
    return Math.min(Math.abs(x - y), Math.abs(y - x + len));
  }
     
  // keep this function call here 
  ClosestEnemyII(readline());