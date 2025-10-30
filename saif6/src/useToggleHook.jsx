import {useState}  from "react";

function useToggle(defaultVal){
    const [value,setValue]=useState(defaultVal);
    
    function toggle(val){
        if(typeof val !="boolean"){
            setValue(!value)
        }else{
            setValue(val)
        }
    }
    return [value,toggle];
}
export default useToggle;
