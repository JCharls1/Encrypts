

function Encrypt({text}){
    const isNumber = (value) => {
        return typeof value == 'number';
    }

    const check_greater_lesser = (text) => {
        if(text == "greater"){
            if(accumulator > 26)
                accumulator = 0;
        }else if(text == "lesser"){
            if(accumulator < 0)
                accumulator = 26;
        }
    }

    const addAccumulator = () =>{
        check_greater_lesser("greater");
        accumulator++;
    }

    const minusAccumulator = () =>{
            check_greater_lesser("lesser");
            accumulator--;
    }

    const overLappingAccumulator = (value) => {
        while(value > 26){
            value = value - 26;
        }
        // console.log(value);
        return value;
    }

    const addNumbers = (instruction) =>{
        let newVale = parseInt(loop_input.toString() + instruction, 10);
        loop_input = newVale;
        // console.log(loop_input);
    }
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ip = 0;
    let accumulator = 0;
    let loop_input = 0;
    let input = "";
    let a = "asda";
    while(ip < text.length){
        let instruction = text.charAt(ip);
        
        if(instruction == 'a'){ // a for add
            addAccumulator();
            // console.log(accumulator);
        }else if(instruction == 'm'){ // m for minus
            minusAccumulator();
        }else if(instruction == 'r'){ // r for raise
            accumulator = accumulator * 2;
            accumulator = overLappingAccumulator(accumulator);
        }else if(instruction == 'd'){ // d for display
            check_greater_lesser("greater");
            input += alphabet[accumulator-1];
        }else if(instruction == 'e'){ // e for empty
            accumulator = 0;
            loop_input = 0;
        }else if(instruction == 'l'){ // l for loop
            for(let i = 0; i < loop_input; i++){
                accumulator++;
            }
            accumulator = overLappingAccumulator(accumulator);
        }else if(isNumber(Number(instruction))){
            addNumbers(instruction);
        }
        
        ip++;
    }

    return(
        <>
            Output: {input}
        </>
    );
}

export default Encrypt;