function Encrypt({text}){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ip = 0;
    let accumulator = 0;
    let input = "";
    let a = "asda";
    while(ip < text.length){
        let instruction = text.charAt(ip);
        
        if(instruction == 'i'){
            if(accumulator > 26)
                accumulator = 0;
            accumulator++;
        }else if(instruction == 'o'){
            if(accumulator < 0)
                accumulator = 26;
            accumulator--;
        }else if(instruction == 'r'){
            accumulator = accumulator * 2;
            while(accumulator > 26){
                accumulator = accumulator - 26;
            }
            console.log(accumulator);
        }else if(instruction == 'd'){
            if(accumulator > 26)
                accumulator = 0;
            input += alphabet[accumulator-1];
        }else if(instruction == 'e'){
            accumulator = 0;
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