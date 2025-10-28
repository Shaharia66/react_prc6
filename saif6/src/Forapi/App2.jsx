import { useState } from "react";
import College from "./college";
import { CallSubject } from "./contextApi";

function App2(){
    const [sub,setSub]=useState("English")
    return(
        <div style={{backgroundColor:"green", padding:"10px"}}>
            <CallSubject.Provider value={sub}>
                <select value={sub} onChange={(event)=>{setSub(event.target.value)}}>
                    <option value="">Select Sub:</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                </select>

                <h1>This is for context API.</h1>
                <button onClick={()=>setSub("")}>CLEAR!</button>
                <College/>
            </CallSubject.Provider>

        </div>
    )
}
export default App2;
