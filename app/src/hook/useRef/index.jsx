import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

const UseRef = () =>{
  const refs = useRef(null);
  const save = useRef({value:'123'});
  return (
    <div>p
      <p ref={refs}>我是p</p>
      <button onClick={()=>{
        // console.log(refs);
        // console.log(refs.current.innerHTML);
        // console.log(refs.current);
        save.current.value = refs.current.innerHTML;
        console.log(save);
      }}>useRef</button>
      <button> <Link to="/">Go UseState</Link></button>
      
    </div>
  )
} 

export default UseRef