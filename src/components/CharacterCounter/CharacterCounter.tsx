import { TextInput } from "../TextInput/TextInput"
import StatsDisplay from "../StatsDisplay/StatsDisplay"
import type { CharacterCounterProps, StatsDisplayProps, TextStats } from "../../types"
import { useState } from "react";
import type { TextInputProps } from "../../types";
import "tailwindcss";
export default function CharacterCounter(props: CharacterCounterProps) {
  //character counter
  const [text, setText] = useState('');
  let time = 0;
  let wordCount = 0
//declaring and initializing onTextChange function
  const onTextChange = (newText: string) => {
    setText(newText);
  }
  // storing words in words array 
  const words = text.trim() ? text.trim().split(/\s+/) : []
  wordCount = words.length;

//calaculating time taken for 3 words
  time = Math.floor(words.length / 3)
  //converting the time into minutes and seconds
  let minute = Math.floor(time / 60);
  let sec = time % 60
  //setting reading time in Min:Sec format
  let readingtime = `${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  // // initializing Object of TextInputProps
  const textInput: TextInputProps = { onTextChange, placeholder: 'Start Typing your content here', initialValue: text }
  const CharacterCount = text.length;
// initializing Object of TextStats
  const textStats: TextStats = { characterCount: CharacterCount, wordCount: wordCount, readingTime: readingtime }
// initializing Object of StatsDisplayProps
  const statsDisplayProps: StatsDisplayProps = { stats: textStats, showReadingTime: true }




  return (<div className="w-auto flex flex-col p-10 justify-center rounded-xl ">
     {/* rendering TextInput Component and passing textInput as parameter */}
    <div className="flex flex-col gap-10 rounded-xl">
      <TextInput {...textInput} />
        {/* rendering StatsDisplay Component and passing statsDisplayProps as parameter */}
      <StatsDisplay {...statsDisplayProps} />
    </div>
    <span className="w-full bg-white text-center rounded-b-lg p-5 text-gray-500"> Min: {props.minWords} | Max: {props.maxWords}</span>
  </div>)
}