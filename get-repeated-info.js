function getRepeatedInfo(number) {
    let repeatStack = [];
    String(number).split('').forEach(num =>{
        if(typeof repeatStack[num] === 'undefined'){
            repeatStack[num] = 0;
        }
        repeatStack[num]+= Number(num);
    });

    let result = {};
    for(let i =1;i <= 9;i++){
        if(typeof repeatStack[i] === 'undefined'){
            continue;
        }
        result[i] = String(i).repeat(repeatStack[i]);
    }
    return result;
}

export default getRepeatedInfo;