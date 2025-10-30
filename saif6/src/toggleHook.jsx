import useToggle from "./useToggleHook";

function App3(){

    const forbtn={
        backgroundColor:"red",
        padding:"5px",
        color:"yellow",
    }
    const [value,toggle]=useToggle(true);

    return(
        <div>
        <button style={forbtn} onClick={()=>toggle()}>Toggle handling</button>
        <button style={forbtn} onClick={()=>toggle(false)}>hide toggle</button>
        <button style={forbtn} onClick={()=>toggle(true)}>Show toggle</button>
        {
            value?<h1>Custom Hook.</h1>:null
        }
        </div>
    )
}
export default App3;
