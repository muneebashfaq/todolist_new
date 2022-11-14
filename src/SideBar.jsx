import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { FirstName,LastName } from './App'
const SideBar=()=>{
    const firstname = useContext(FirstName)
    const lastname  = useContext(LastName)
    const [title,changeTitle] = useState(0)
   
    useEffect(() => {
         document.title ="Title change"
    }, [title])
    function change_title(){
       changeTitle(title+1)
    }
    return(
        <>
      {firstname}
      {lastname}<br/>
<button onClick={change_title}>Click Me TO Change Title</button><br/>
        this is side bar
        </>
    )
}
export default SideBar