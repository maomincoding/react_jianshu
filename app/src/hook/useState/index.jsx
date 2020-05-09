import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Border} from '../style'

const UseState = () => {
  const [count,setCount] = useState(0);
  const [obj,setObj] = useState({name:'maomin'});
  const [arr,setArr] = useState([1,2,3]);
  const [func,setFunc] = useState(()=>{
    return 1
  })
  return (
    <div>
      <button> <Link to="/UseEffect"> Go UseEffect</Link></button>
      <Border>
       <p>{count}</p>
       <button onClick={()=>setCount(count+1)}>add</button>
      </Border>
      <Border>
       <p>{obj.name}-{obj.age}</p>
       <button onClick={()=>setObj({name:'xqm',age:18})}>changeOBJ</button><br/>
       <button onClick={()=>setObj({...obj,age:20})}>changeOBJ 2</button>
      </Border>
      <Border>
       <p>{arr}</p>
       <button onClick={()=>{
          setArr(()=>{
            arr.push(4);
            return [...arr]
          })
       }
       }>changeArr</button>
      </Border>
      <Border>
       <p>{func}</p>
       <button onClick={()=>setFunc(func+1)}>changeFuc</button>
       </Border>
    </div>
  )
}

export default UseState