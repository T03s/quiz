// Is Balance function to mach starters "({[" to finishers "]})"
// )( -> shouldn't be a balance string
function isBalance(input) {
    //It's OK because input charachters are only {}()[]
    if (input.length%2 !== 0){
        return false;
    }

    //{}
    let brace = 0;
    // []
    let bracket = 0;
    // ()
    let parenthesis = 0;

    for(let i =0;i < input.length;i++){
        switch(input[i]){
            case "{":
                brace++;
                break;
            case "}":
                if(brace === 0){return false;}
                brace--;
                break;
            case "(":
                parenthesis++;
                break;
            case ")":
                if(parenthesis === 0){return false;}
                parenthesis--;
                break;
            case "[":
                bracket++;
                break;
            case "]":
                if(bracket === 0){return false;}
                bracket--;
                break;
        }
    }
    return (brace + bracket + parenthesis == 0);
}



export default isBalance;