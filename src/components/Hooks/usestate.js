import React from "react";
import "./style.css";
const UseState=()=>{
    const initialdata=10;
    const [Num,setNum]=React.useState(initialdata)
    function name(Num) {
        if(Num===0)
        return <h1>RIGHT WINS</h1>
        if(Num===10)
        return <h1>LEFT WINS</h1>
    }
    return (
    <>
    
<div className="center_div">
<p>{Num}</p>
 
<div class="button2" onClick={() =>setNum(Num+1)}>
    <span></span>
    <span></span>
    INCR.
</div>
{/* <div class="button2" onClick={()=>(Num>0?setNum(Num-1):setNum(0))}> */}
<div class="button2" onClick={()=>setNum(Num-1)}>
    <span></span>
    <span></span>
   DECR.
</div>
</div>
    </>
    )
}
export default UseState;