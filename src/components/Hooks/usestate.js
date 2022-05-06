import React, { useEffect } from "react";
import "./style.css";
const UseState=()=>{
    const initialdata=5;
    const [Num,setNum]=React.useState(initialdata)
    const [show,setshow]=React.useState("")
    useEffect(()=>{
        if(Num===10)
     setshow("LEFT WINS")
     if(Num===0)
     setshow("RIGHT WINS")
    
    })
   
   
    function incHandler(){
     setNum(Num+1);
     if(Num==10)
     {setNum(initialdata);
        setshow("GAME RESTARTED")
     }
    }
    function decHandler(){
        setNum(Num-1);
        if(Num==0)
        {setNum(initialdata);
        setshow("GAME RESTARTED")}
        
       }
    return (
    <>
    
<div className="center_div">
<p>{Num}</p>
 <div>
     <p>{show}</p>
 </div>
<div class="button2" onClick={incHandler}>
    <span></span>
    <span></span>
    LEFT
</div>
{/* <div class="button2" onClick={()=>(Num>0?setNum(Num-1):setNum(0))}> */}
<div class="button2" onClick={decHandler}>
    <span></span>
    <span></span>
   RIGHT
</div>
</div>
    </>
    )
}
export default UseState;