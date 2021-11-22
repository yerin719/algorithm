function solution(lottos, win_nums) {
    let min = lottos.filter(lotto => win_nums.includes(lotto)).length;
    let max = lottos.filter(lotto => !lotto).length + min;
    
    min = min < 1 ? 1 : min;
    max = max < 1 ? 1 : max;
    
    return [7-max, 7-min];
}
