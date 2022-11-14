import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClockBody from './ClockBody'
import ClockDay from "./ClockDay";
const Body = () => {
    var date = new Date()
    const time_val = date.toLocaleTimeString()
    const [current, update_current] = useState(time_val)
    const [colors, setcolors] = useState('red')
    const day = date.getUTCDay()
  
    function week_days() {
        return <ClockDay/> 
    }

    setTimeout(() => {

        const time_val = date.toLocaleTimeString()
        update_current(time_val)
        if (colors === 'red') {
            setcolors('blue')
        } else {
            setcolors('red')
        }

    }, 1000);


    return (<>
 
        <ClockBody time={current} color={colors} Day={week_days(0)} />
      

    </>)
}

export default Body