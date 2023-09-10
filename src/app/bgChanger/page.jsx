"use client"
import React, { useState } from 'react'

const bgChanger = () => {
    const [color , setColor] = useState("red")


const handleColor = () =>{ 
setColor('green')
    
}

  return (
    <>
    <div className="color"  style={{ "background-color" : color }}>

    

        <button onClick={() => setColor('green')}>green</button>        
        <button onClick={() => setColor('blue')}>blue</button>        
        <button onClick={() => setColor('yellow')}>yellow</button>        
        <button onClick={() => setColor('#fff')}>white</button>        
    </div>
    </>
  )

}

export default bgChanger