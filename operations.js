function operations(ops) {
    let result = [];
    ops.split(' ').forEach(c =>{
        //append numerics
        if(!isNaN(Number(c))){
            result.push(Number(c));
        }else{
            // do actions
            switch(c){
                case 'R':
                    result.pop();
                    break;
                case 'D':
                    result.push(result[result.length-1]*2);
                    break;
                case '+':
                    result.push(result[result.length-1]+result[result.length-2]);
                    break;
            }
        }
    });
    
    return result.reduce((a,b) => a+b);
}

export default operations;