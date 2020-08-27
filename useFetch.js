import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
  const isMounted = useRef(true)

  const [state, setState] = useState({
    data: null,
    loader: true,
    error: null
  })

  useEffect(() => {
    return () => {
      isMounted.current=false
    }
  }, [])

  useEffect(()=>{

    setState({
      data: null,
      loader: true,
      error: null
    })

    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      if(isMounted.current){
        setState({
          loader: false,
          error: null,
          data
        })
      }
    })
    .catch(()=>{
      setState({
        data: null,
        loader: false,
        error: 'La API no pudo regresar el valor'
      })
    })
  },[url])

  return state
}
