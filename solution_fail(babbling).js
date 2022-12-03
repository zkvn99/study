function solution(babbling) {
    var answer = 0;
    const getPermutations = (arr, num) => {
        const results = [];
        if (num === 1) return arr.map(v => [v]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutations(rest, num - 1);
            const attached = permutations.map(v => [fixed, ...v]);
            results.push(...attached);
        });
        
        return results;
    }
    
    const getAllPermutations = (arr) => {
        let results = [];
        arr.forEach((value, index, origin) => {
            results.push(...getPermutations(origin, index + 1));
        });
        return results;
    }
    let bab1 = getAllPermutations(["aya","ye","woo","ma"]);
    for (let i=0; i<bab1.length; i++)
    {
        let bab2 = [];
        bab2[i] = bab1[i].join('');
        if (babbling.includes(bab2[i])){
            answer ++;
        }
    }
    return answer;
}