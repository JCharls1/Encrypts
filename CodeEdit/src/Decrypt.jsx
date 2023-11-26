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

    let output = "";
    let ip = 0;
    while(ip < text.length){
        let character = text[ip];
        for(let i = 0; i < alphabet.length; i++){
            if(character == alphabet[i]){
                console.log(optimized_crypt[alphabet[i]]);
                output += optimized_crypt[alphabet[i]];
                break;
            }
        }
        ip++;
    }

    return(
        <>
            {/* <h1>{console.log(output)}</h1> */}
            Output: {output}
        </>
    );
}

export default Decrypt;