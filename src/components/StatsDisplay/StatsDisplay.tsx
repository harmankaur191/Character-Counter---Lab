import type { StatsDisplayProps } from "../../types"
export default function StatsDisplay(props: StatsDisplayProps) {
  const styles = "font-bold text-3xl"
  const stylesLabel = "font-normal text-gray-700"

  return (<div className="w-auto flex flex-inline gap-[5vw]  border-gray-300 p-10 justify-center bg-white rounded-t-lg">
    <section>
      <label className={`${stylesLabel}`}>Characters:</label> <br /><span className={`${styles}`}>{props.stats.characterCount}</span></section>
    <section>
      <label className={`${stylesLabel}`}>Words:</label><br /><span className={`${styles} ${props.stats.wordCount > 100 ? 'text-red-500' : 'text-green-500'}`}>{props.stats.wordCount}</span>
    </section>
    <section>
      <label className={`${stylesLabel}`}>Reading Time: </label><br /><span className={`${styles}`}>{props.stats.readingTime}</span>
    </section>
  </div>)
}