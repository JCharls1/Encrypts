import Encrypt from './Encrypt'

function Decrypt({ text }){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const crypt = {
        "a":"ade",
        "b":"aade",
        "c":"aaade",
        "d":"aaaade",
        "e":"aaaaade",
        "f":"aaaaaade",
        "g":"aaaaaaade",
        "h":"aaaaaaaade",
        "i":"aaaaaaaaade",
        "j":"aaaaaaaaaade",
        "k":"aaaaaaaaaaade",
        "l":"aaaaaaaaaaaade",
        "m":"aaaaaaaaaaaaade",
        "n":"aaaaaaaaaaaaaade",
        "o":"aaaaaaaaaaaaaaade",
        "p":"aaaaaaaaaaaaaaaade",
        "q":"aaaaaaaaaaaaaaaaade",
        "r":"aaaaaaaaaaaaaaaaaade",
        "s":"aaaaaaaaaaaaaaaaaaade",
        "t":"aaaaaaaaaaaaaaaaaaaade",
        "u":"aaaaaaaaaaaaaaaaaaaaade",
        "v":"aaaaaaaaaaaaaaaaaaaaaade",
        "w":"aaaaaaaaaaaaaaaaaaaaaaade",
        "x":"aaaaaaaaaaaaaaaaaaaaaaaade",
        "y":"aaaaaaaaaaaaaaaaaaaaaaaaade",
        "z":"aaaaaaaaaaaaaaaaaaaaaaaaaaade"
    };

    const multiplied_crypt = {
        "b": "arde",
        "d": "aarde",
        "f": "aaarde",
        "h": "aaaarde",
        "j": "aaaaarde",
        "l": "aaaaaarde",
        "n": "aaaaaaarde",
        "p": "aaaaaaaarde",
        "r": "aaaaaaaaarde",
        "t": "aaaaaaaaaarde",
        "v": "aaaaaaaaaaarde",
        "x": "aaaaaaaaaaaarde",
        "z": "aaaaaaaaaaaaarde",
        
    }

    const optimized_multiplied_crypt = {
        "b": "1lrde",
        "d": "2lrde",
        "f": "3lrde",
        "h": "4lrde",
        "j": "5lrde",
        "l": "6lrde",
        "n": "7lrde",
        "p": "8lrde",
        "r": "9lrde",
        "t": "10lrde",
        "v": "11lrde",
        "x": "12lrde",
        "z": "13lrde",
        
    }
    const optimized_crypt = {
        "a":"1lde",
        "b":"2lde",
        "c":"3lde",
        "d":"4lde",
        "e":"5lde",
        "f":"6lde",
        "g":"7lde",
        "h":"8lde",
        "i":"9lde",
        "j":"10lde",
        "k":"11lde",
        "l":"12lde",
        "m":"13lde",
        "n":"14lde",
        "o":"15lde",
        "p":"16lde",
        "q":"17lde",
        "r":"18lde",
        "s":"19lde",
        "t":"20lde",
        "u":"21lde",
        "v":"22lde",
        "w":"23lde",
        "x":"24lde",
        "y":"25lde",
        "z":"26lde"
    };
    
    const crypts = {
        1: crypt,
        2: optimized_crypt,
        3: multiplied_crypt,
        4: optimized_multiplied_crypt
    };

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }


    let output = "";
    let ip = 0;
    while(ip < text.length){
        let character = text[ip];
        let random = getRndInteger(1, 5);
        for(let i = 0; i < alphabet.length; i++){
            let random_input = random;
            if(character == alphabet[i]){
                if(random_input == 1){
                    output += crypts[1][alphabet[i]];
                }else if(random_input == 2){
                    output += crypts[2][alphabet[i]];
                }else if(random_input == 3){
                    if(crypts[3][alphabet[i]] == undefined){
                        output += crypts[2][alphabet[i]];
                        break;
                    }
                    output += crypts[3][alphabet[i]];
                }else if(random == 4){
                    if(crypts[4][alphabet[i]] == undefined){
                        output += crypts[2][alphabet[i]];
                        break;
                    }
                    output += crypts[4][alphabet[i]];
                }
                break;
            }
        }
        ip++;
    }

    return(
        <>
            Output: {output}
        </>
    );
}

export default Decrypt;