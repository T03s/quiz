
function removerRepetitive(input) {
    let result = "";
    let lastChar = "";

    for(let i = 0; i < input.length;i++){
        if(lastChar !== input[i]){
            lastChar = input[i];
            result+=input[i];
        }
    }
    return result;
}

export default removerRepetitive;