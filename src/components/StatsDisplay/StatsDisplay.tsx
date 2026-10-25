import type { StatsDisplayProps } from "../../types"
export default function StatsDisplay(props:StatsDisplayProps){
 const styles="font-bold text-3xl"
  
  return(<div className="w-auto flex flex-inline gap-[5vw] border-2 border-gray-300">
<section>
  Characters: <br/><span className={`${styles}`}>{props.stats.characterCount}</span></section>
<section>
    Words:<br/><span className={`${styles} ${props.stats.wordCount>100?'text-red-800':'text-green-900'}`}>{props.stats.wordCount}</span>
</section>
<section>
    Reading Time: <br/><span className={`${styles}`}>{props.stats.readingTime}</span>
</section>
  </div>)
}