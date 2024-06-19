import React , { useState} from "react";



function Salty(){

    const [clicked,setClicked ] = useState(true)

    return (
        <div>
     {clicked ? ( <div className="w-4/5 h-[70px] absolute mx-auto top-5 bg-red-600 rounded">
     <button className="p-2 text-gray-900  absolute top-0 right-0" onClick={() => { setClicked(false)}}>x</button>
     <p className="sm-txt text-slate-100 ">Well, Things may not work as Expected since OpenAi API is free tier  if you notice some issue please contract me <a href="https://www.instagram.com/mdyusuf_7/">DM</a></p>
 </div>): ("")}
  
        
 </div>)
}

export default Salty
