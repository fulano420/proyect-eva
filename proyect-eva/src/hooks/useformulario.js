import { useState } from "react"

const useFormulario = (inicial)=>{
  const [formulario, setFormulario] = useState(inicial)
  
  const handleChange = (e)=>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value})
  }

  const reset= ()=>{
    setFormulario({
      name:'',
      motor1_angel:'',
      motor2_angel:'',
      motor3_angel:'',
      motor4_angel:'',
      motor5_angel:'',
    })
  }
  return [formulario, handleChange, reset]
} 

export default useFormulario