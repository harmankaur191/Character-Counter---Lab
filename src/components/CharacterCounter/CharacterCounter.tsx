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

  const onTextChange = (newText: string) => {
    setText(newText);
  }
  const words = text.trim() ? text.trim().split(/\s+/) : []
  wordCount = words.length;


  time = Math.floor(words.length / 3)
  let minute = Math.floor(time / 60);
  let sec = time % 60
  let readingtime = `${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  const textInput: TextInputProps = { onTextChange, placeholder: 'Start Typing your content here', initialValue: text }
  const CharacterCount = text.length;

  const textStats: TextStats = { characterCount: CharacterCount, wordCount: wordCount, readingTime: readingtime }

  const statsDisplayProps: StatsDisplayProps = { stats: textStats, showReadingTime: true }




  return (<div className="w-auto flex flex-col p-10 justify-center rounded-xl ">
    <div className="flex flex-col gap-10 rounded-xl">
      <TextInput {...textInput} />

      <StatsDisplay {...statsDisplayProps} />
    </div>
    <span className="w-full bg-white text-center rounded-b-lg p-5 text-gray-500"> Min: {props.minWords} | Max: {props.maxWords}</span>
  </div>)
}