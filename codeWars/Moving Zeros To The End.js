function moveZeros(arr) {
    const validArr = arr.filter(num => num !== 0);
    
    return [...validArr, ...Array( arr.length - validArr.length).fill(0)]
  }