import React from 'react'
import './ClockBody.css'

const ClockBody = (props) => {
    return (
        <>
        <div className='div'>
            <h1> {props.Day}</h1>
            <h2 style={{ 'color': `${props.color}` }}>
                {props.time}</h2>
            </div>
            

        </>
    )
}

export default ClockBody