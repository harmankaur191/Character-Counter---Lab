
import type { CharacterCounterProps } from "./types";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
export default function App(){
const counter: CharacterCounterProps={minWords:25, maxWords:100,targetReadingTime:1}
  
  return(
    <div className="w-full p-9 justify-center">
      <CharacterCounter {...counter}/>

    </div>
  )

}