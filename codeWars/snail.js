snail = function (array) {
    // enjoy ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ
    if (!array[0].length) return [];
    const result = [];
  
    let i = 0;
    let j = 0;
  
    for (let k = array.length; k > 0; k--) {
      result.push(array[i][j]);
      if (j < array.length - 1) j++;
    }
    
    for (let k = array.length; k > 0; k--) {
      for (let a = 0; a < k - 1; a++) {
        if (k % 2 === array.length % 2) {
          if (i < array.length - 1) i++;
          result.push(array[i][j]);
        } else {
          if (i > 0) i--;
          result.push(array[i][j]);
        }
      }
  
      for (let b = 0; b < k - 1; b++) {
        if (k % 2 === array.length % 2) {
          if (j > 0) j--;
          result.push(array[i][j]);
        } else {
          if (j < array.length - 1) j++;
          result.push(array[i][j]);
        }
      }
    }
  
    return result;
  };