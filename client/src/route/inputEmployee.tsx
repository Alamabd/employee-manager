import React, { FormEvent, useEffect, useState } from "react"
import Header from "../component/header"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

type employeeType = {
  id: string,
  name: string,
  position: string
}

const InputEmployee: React.FC = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState<employeeType>()
  const [inp, setInp] = useState({
    name: '',
    position: ''
  })
  const navigate = useNavigate()
  
  // getDataEMployee
  useEffect(() => {
    async function getEmployee() {
      try {
        const response = await axios.get('http://localhost:3000/employee', {
          params: {
            id
          }          
        })
        if(response.status === 200) {
          const { data } = response.data
          
          setEmployee(data[0])
          setInp(data[0])
        }        
      } catch (error) {
        console.log(error)
      }
    }
    id && getEmployee()
  }, [])

  // Validate
  function validate() {
    if(inp.name.length > 3 && inp.position.length > 3) {
      return true
    } else {
      return false
    }
  }

  // Submit handler
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if(validate()) {

      // Update
      if(id) {
        try {
          const response = await axios.put('http://localhost:3000/employee', {
            id: id, 
            name: inp.name, 
            position: inp.position
          })
          if(response.status === 200) {
            const { data } = response.data
            console.log(data)
          }    
        } catch (error) {
          console.log(error)
        }
        navigate('/')
      } else {
        // Insert
        try {
          const response = await axios.post('http://localhost:3000/employee', {
            name: inp.name, 
            position: inp.position
          })
          if(response.status === 200) {
            const { data } = response.data
            console.log(data)
          }    
        } catch (error) {
          console.log(error)
        }
        navigate('/')
      }
    }
  }
  
  return (
    <div className="p-4 mt-4 mx-auto max-w-[560px] border rounded max-sm:mx-4">
      <Header />
      <p className="my-4">Create or update Employee</p>
      <div className="p-4 border flex gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Employee Info</h2>
          <p>This information will be released to the public so be careful what you share.</p>
        </div>
        <div className="w-2/3">
          <form onSubmit={submit}>
            <input onChange={(event) => 
              setInp({...inp, name: event.currentTarget.value})
              } defaultValue={employee?.name} className="p-2 mb-2 border outline-blue-600" type="text" placeholder="Name" />
            <input onChange={(event => {
              setInp({...inp, position: event.currentTarget.value})
              })} defaultValue={employee?.position} className="p-2 mb-2 border outline-blue-600" type="text" placeholder="Position" />
            <button className="p-2 w-full bg-blue-600 text-white font-semibold text-center" type="submit">Enter</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputEmployee
