function solution(x, y, n) {
    const dpArray = [];
  
    dpArray[x] = 0;
    dpArray[x * 2] = 1;
    dpArray[x * 3] = 1;
    dpArray[x + n] = 1;
  
    for (let i = x + 1; i <= y; i++) {
      const cur = dpArray[i];
        
      if (!cur) continue;
      const targets = [i * 2, i * 3, i + n];
  
      targets.forEach((target, idx) => {
        if (target <= y) {
            if (dpArray[target]) {
                dpArray[target] = Math.min(dpArray[target], cur + 1)
            } else dpArray[target] = cur + 1;
        }
      });
    }
  
    return dpArray[y] !== undefined ? dpArray[y] : -1;
  }