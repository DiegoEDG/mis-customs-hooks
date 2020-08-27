import {useState} from 'react';

export const useForm=(initialState={})=>{
  const [values, setValues] = useState(initialState)

  const resetInput=()=>{
    setValues(initialState)
  }

  const handleInputChange=({target})=>{
    setValues({
      ...values,
      [target.name]:target.value
    })
  }

  return [values,handleInputChange,resetInput]
}