import React from 'react'


const ClockDay = () => {
    const date = new Date();
    const day = date.getDay()
    if (day === 1) {
        var days = "Monday"
    } else if (day === 2) {
        var days = "Tuesday"
    } else if (day === 3) {
        var days = "Wednesday"
    }
    else if (day === 4) {
        var days = "Thursday"
    }
    else if (day === 5) {
        var days = "Friday"
    }
    else if (day === 6) {
        var days = "Saturday"
    } else if (day === 7) {
        var days = "Sunday"
    }
    return (
        <>
          {days}
        </>
    )
}

export default ClockDay