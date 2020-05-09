import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const UseEffect = () =>{
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(count);
    return () =>{
      console.log('componentWillUnmount'); // 相当于 componentWillUnmount
    }
  },[count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>add</button>
      <button> <Link to="/">Go UseState</Link></button>
      
    </div>
  )
} 

export default UseEffect