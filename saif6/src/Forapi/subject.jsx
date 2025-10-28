import { useContext } from "react";
import { CallSubject } from "./contextApi";

function Subject(){
    const subject=useContext(CallSubject)
    return(
        <div style={{backgroundColor:"pink", padding:"10px"}}>
            <h1>Subject is:{subject}</h1>

        </div>
    )
}
export default Subject;