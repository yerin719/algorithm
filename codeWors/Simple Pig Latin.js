function pigIt(str) {
    return str.split(' ').map(s => `${s.slice(1)}${s[0]}${s.match(/[a-zA-z]/)?'ay':''}`).join(' ');
  }
