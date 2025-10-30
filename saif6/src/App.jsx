import './App.css'
import App2 from './Forapi/App2';
import Com1 from './lifting1'
import Com2 from './lifting2'
import { useState } from "react";
import App3 from './toggleHook';

// function App() {
//   const [user,setUser]=useState("");

//   return (
//     <>
//     <Com1 setUser={setUser}/>
//     <Com2 user={user}/>
//     </>
//   )
// }
function App(){
  return(
    <>
    {/* <App2/> */}
    <App3 />
    </>
  )
}

export default App
