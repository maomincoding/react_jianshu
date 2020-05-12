import React, { useState } from 'react'
// import {Parent} from './parent/index'
// import {Child} from './child/index'

const Parent = React.createContext();


const Child = () => {
    let count = React.useContext(Parent);
    return <h2>{count}</h2>
}

const UseContext = () => {
    const [count] = useState(99);
    return (
        <div>
            <Parent.Provider value={count}>
                  <Child/>
            </Parent.Provider>
        </div>
    )
}
export default UseContext