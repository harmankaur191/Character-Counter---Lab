
import type { TextInputProps } from "../../types";

export function TextInput(props:TextInputProps){
     const styles=" justify-center border-1 rounded-lg border-gray-300 bg-white  p-9"
    return(
    <div className="flex justify-center">
        <textarea className={styles} placeholder={props.placeholder} value={props.initialValue} onChange={(e)=>props.onTextChange(e.target.value)} rows={6} cols={50} />
    </div>
    )

}