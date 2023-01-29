function solution(today, terms, privacies) {
    var answer = [];

    for(let i=0; i < privacies.length; i++) {
        const [date, term] = privacies[i].split(' ');
        const expiredDate = +getValue(date) + +getMap(terms).get(term) * 28 - 1;
        
        if(expiredDate < getValue(today)) {
            answer.push(i+1);
        }
    }
    
    return answer;
}

getValue = (date) => {
    const [year, month, day] =  date.split('.');
    
    return +year.slice(2,4) * 28 * 12 + +month * 28 + +day;
}

getMap = (terms) => {
    const termsMap = new Map()
    
    for(let i=0; i < terms.length; i++) {
        const [key, value] = terms[i].split(' ');
        termsMap.set(key,value);
    }
    return termsMap;
}