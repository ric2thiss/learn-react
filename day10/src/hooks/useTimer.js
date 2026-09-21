import React, { useEffect, useState } from 'react'

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false)

  useEffect(()=>{
    if(!isRunning){
        return
    }
    const counting =  setInterval(()=> {
        setSeconds((prev)=> prev+1)
    },1000)

    return () => {
        clearInterval(counting)
    }
  },[isRunning])

  function start(){
    setisRunning(true)
  }
  function stop(){
    setisRunning(false)
  }
  function reset(){
    setisRunning(false)
    setSeconds(0)
  }

  return {
    seconds,
    start,
    stop,
    reset
  }
}
