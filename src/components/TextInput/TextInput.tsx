import { useState } from "react"
import type { TextInputProps } from "../../types";

export function TextInput(){
    const styles="border-1 rounded-lg border-gray-300"
  const [text, setText] =useState('');
  const onTextChange=(newText:string)=>{
    setText(newText);
  }
  const props:TextInputProps={onTextChange,placeholder:'StartTyping your content here', initialValue:text}
  
    return(
    <div>
        <textarea className={styles} placeholder={props.placeholder} value={props.initialValue} onChange={(e)=>props.onTextChange(e.target.value)} rows={6} cols={50} />
           {text}
        
    </div>
    )

}