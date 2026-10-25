import { TextInput } from "../TextInput/TextInput"
import StatsDisplay from "../StatsDisplay/StatsDisplay"
import type { CharacterCounterProps, StatsDisplayProps, TextStats } from "../../types"
import { useState } from "react";
import type { TextInputProps } from "../../types";
export default function CharacterCounter(props:CharacterCounterProps){
  //character counter
  const [text, setText] =useState('');
  let time =0;
  let wordCount=0
  
  const onTextChange=(newText:string)=>{
    setText(newText);
  }
  const words =text.trim()? text.trim().split(/\s+/):[]
    wordCount=words.length;
    
    
  time = Math.floor(words.length/3)
  let minute=Math.floor(time/60);
  let sec=time%60
  let readingtime = `${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  const textInput:TextInputProps={onTextChange,placeholder:'Start Typing your content here', initialValue:text}
  const CharacterCount = text.length;

  const textStats: TextStats={characterCount:CharacterCount, wordCount:wordCount,readingTime:readingtime}
  
  const statsDisplayProps: StatsDisplayProps={stats:textStats,showReadingTime:true}

  
  
  
return(<div  className="flex flex-col border-2 border-black-900 justify-itemscenter p-10">

<TextInput{...textInput}/>

<StatsDisplay {...statsDisplayProps}/>
<section>
  {props.minWords}|{props.maxWords}
</section>
</div>)
}