
function Com1({setUser}){
    return(
        <div>
            <h1>this is first component.</h1>
            <input type="text" onChange={(event)=>{setUser(event.target.value)}} placeholder="put something" />
            <hr />
        </div>
    )
}
export default Com1;