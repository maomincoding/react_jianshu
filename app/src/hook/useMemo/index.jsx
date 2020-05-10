import React,{useMemo,useEffect} from 'react'


const UseMemo = () => {
    useMemo(()=>{
        console.log("useMemo");
    },[])
    useEffect(()=>{
        console.log("useEffect");
    })
    return (
        <div></div>
    )
}

export default UseMemo

/*
useEffect与useMemo执行时间不同

*/ 