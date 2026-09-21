import React, { useState } from 'react'

export function useForm() {
  const [values, setValues] = useState({name:"", email:""})

  function handleChange(args){
    setValues(prev=>{
        return{
            ...prev,
            [args.name]:args.value
        }
    })
  }

  function reset(){
    setValues({name:"", email:""})
  }

  return{
    values,
    handleChange,
    reset
  }
}