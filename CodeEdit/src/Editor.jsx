import { useState } from 'react'
import './Editor.css'
import Encrypt from './Encrypt'
import Decrypt from './Decrypt'

function Editor(){
    const [DecryptTxt, setDecryptTxt] = useState("");
    const [EncryptTxt, setEncryptTxt] = useState("");
    const text = "Test Result";
    let test = "test cosmmit"

    const handleChangeDecrypt = (event) =>{
        setDecryptTxt(event.target.value);
    }

    const handleChangeEncrypt = (event) =>{
        setEncryptTxt(event.target.value);
    }

    return(
        <>
            <div className="body">
                <div className="code-editor">
                    <div className="code">
                        <div className="html-code">
                            <h1>Decrypt</h1>
                            <textarea onChange={handleChangeDecrypt} value={DecryptTxt}></textarea>
                        </div>
                    </div>
                    <pre id="result">
                        {/* <Encrypt text={txt} />  */}
                        <Decrypt text={DecryptTxt} /> 
                    </pre>
                </div>
            </div>
            <div className="body">
                <div className="code-editor">
                    <div className="code">
                        <div className="html-code">
                            <h1>Encrypt</h1>
                            <textarea onChange={handleChangeEncrypt} value={EncryptTxt}></textarea>
                        </div>
                    </div>
                    <pre id="result">
                        <Encrypt text={EncryptTxt} /> 
                        {/* <Decrypt text={txt} />  */}
                    </pre>
                </div>
            </div>
        </>
    );
}

export default Editor;