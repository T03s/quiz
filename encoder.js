
//encoder, Encode string
//ASCII(z) = 122
//ASCII(a) = 97
//Call Example: encoder({"inputString":"eeee","repeatCount":1})
function encoder({ inputString, repeatCount }) {
    if(repeatCount === 0){
        return inputString;
    }

    //move last charachter to first position
    let result = inputString.substring(inputString.length-1)+inputString.substring(0,inputString.length-1)
    
    const resultMap = result.split('').map(a => {
        if(a === 'z'){
            return 'a';
        }
        return String.fromCharCode(a.charCodeAt(0)+1);
    })
    result = resultMap.join('');
    
    //check recursive conditions
    if(repeatCount === 1){
        return result;
    }
    repeatCount--;
    return encoder({"inputString":result,"repeatCount":repeatCount});
}

export default encoder;