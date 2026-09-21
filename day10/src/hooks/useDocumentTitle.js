import React, { useEffect } from 'react'

export function useDocumentTitle(arg) {
  useEffect(()=>{
    document.title = arg
  },[])
}