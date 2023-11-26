import { useState } from 'react'
import './Editor.css'
import Encrypt from './Encrypt'

function Editor(){
    const [txt, setTxt] = useState("");
    const text = "Test Result";
    let test = "test cosmmit"

    const handleChange = (event) =>{
        setTxt(event.target.value);
    }

    return(
        <>
            <div className="body">
                <div className="code-editor">
                    <div className="code">
                        <div className="html-code">
                            <h1>Encrypt</h1>
                            <textarea onChange={handleChange} value={txt}></textarea>
                        </div>
                    </div>
                    <pre id="result"><Encrypt text={txt} /></pre>
                </div>
            </div>
        </>
    );
}

export default Editor;