function solution(numbers) {
    const answer = [];
    const stack = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (!stack.length || numbers[i] < numbers[i - 1]) {
        stack.push(i);
      } else {
        while (stack.length && numbers[i] > numbers[stack[stack.length - 1]]) {
          answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
      }
    }
  
    while (stack.length) {
      answer[stack.pop()] = -1;
    }
  
    return answer;
  }