function solution(number){
  const result = number/3
  const multipleSum = addAll(number/3) * 3 + addAll(number/5) * 5;
  const bothSum = addAll(number/15) * 15;
  
  return multipleSum - bothSum;
}

function addAll(n) {
  let sum = 0; 
  for(let i = 1; i < n; i ++) {
    sum +=i;
  }
  
  return sum;
}