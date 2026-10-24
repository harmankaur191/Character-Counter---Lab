import { TextInput } from "../TextInput/TextInput"
import StatsDisplay from "../StatsDisplay/StatsDisplay"
import type { CharacterCounterProps, TextStats } from "../../types"
import { useState } from "react";
import type { TextInputProps } from "../../types";
export default function CharacterCounter(props:CharacterCounterProps){
  //character counter
  const [text, setText] =useState('');
  // word counter
  const [wordCount, setWordCount] = useState(0);
  const onTextChange=(newText:string)=>{
    setText(newText);
    if(newText.endsWith(" ")){
      setWordCount(wordCount+1)
    }
  }
  const textInput:TextInputProps={onTextChange,placeholder:'StartTyping your content here', initialValue:text}
  const CharacterCount = text.length;
  
  
  
  
  
return(<div  className="flex flex-col border-2 border-black-900 justify-itemscenter p-10">
{/* {CharacterCount}
{wordCount} */}
<TextInput{...textInput}/>

<StatsDisplay/>
<section>
  {props.minWords}|{props.maxWords}
</section>
</div>)
}