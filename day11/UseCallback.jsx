import React, { useCallback, useMemo, useState } from 'react'

function UseCallback() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const handleClick1 = useCallback(()=> setCount1(prev=> prev+1), [])
    
    function handleClick2(){
        setCount2((prev)=> prev+1)
    }

    function expensiveCalculation(){
        let result = 0

        for(let i = 0; i < 1000;i++){
            result = result + i
        }
        return result;
    }

    const val = useMemo(()=>{
        return expensiveCalculation()
    },[])
    console.log("Parent Rendered")
  return (
    <div>
        <h1>UseMemo : {val}</h1>
        <hr />
        <h1>With UseCallBack</h1>
        <Button  handleClick={handleClick1} text="UseCallback Run"/>
        <h2>Without UseCallBack</h2>
        <Button  handleClick={handleClick2} text="WithOut UseCallback Run"/>
        
    </div>
  )
}

export default UseCallback


const Button = React.memo(({ handleClick, text })=> {
    console.log(`${text} is rendered`)

    return (
        <button onClick={handleClick}>
            {text} 
        </button>
    )
})