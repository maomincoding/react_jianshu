import React,{useMemo,useState} from 'react'


const UseMemo = () => {
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(0);
    let res = useMemo(()=>{
        return {count,num} 
    },[count])
    // useEffect(()=>{
    //     console.log("useEffect");
    // })
    return (
        <div>
           <div>count：{res.count}</div>
           <button onClick={()=>{setCount(count+1);console.log(count);}}>change-count</button>
           <div>num：{res.num}</div>
           <button onClick={()=>{setNum(num+1);console.log(num);}}>change-num</button>
        </div>
    )
}

export default UseMemo

/*
使用 useMemo 避免重复渲染页面。

useEffect与useMemo执行时间不同
useMemo 是在组件渲染过程中执行的，useEffect是在componentDidMount以后执行的。也就是说useMemo先于useEffect执行。
*/ 