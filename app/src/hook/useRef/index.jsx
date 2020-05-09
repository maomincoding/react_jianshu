import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

const UseRef = () =>{
  const refs = useRef(null)
  return (
    <div>
      <p ref={refs}></p>
      <button onClick={()=>{
        console.log(refs)
      }}>useRef</button>
      <button> <Link to="/">Go UseState</Link></button>
      
    </div>
  )
} 

export default UseRef