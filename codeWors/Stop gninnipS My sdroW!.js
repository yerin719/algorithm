function spinWords(string){
    const arr = string.split(' ');
    
    const result = arr.map(words => {
      if(words.length > 4) {
        return [...words].reverse().join('');
      }
      return words;
    })
    
    return result.join(' ');
  }