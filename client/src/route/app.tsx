import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Header from "../component/Header"

type employeeType = {
  name: string,
  position: string
}[]

const App: React.FC = () => {
  const [employee, setEmployee] = useState<employeeType>()

  useEffect(() => {
    async function getEmployee() {
      try {
        const response = await axios.get('http://localhost:3000/employee')
        if(response.status === 200) {
          const { data } = response.data
          setEmployee(data)
        }        
      } catch (error) {
        console.log(error)
      }
    }
    getEmployee()
  }, [])

  return (
    <div className="p-4 mt-4 mx-auto max-w-[560px] border rounded max-sm:mx-4">
      <Header />
      <div className="my-4 text-right">
        <Link to={'insert'} className="p-2 border rounded">Create Employee</Link>
      </div>
      <table className="border-collapse border table-auto text-left w-full">
        <thead>
          <tr>
            <th className="p-4 max-sm:p-2">No</th>
            <th className="p-4 max-sm:p-2">Name</th>
            <th className="p-4 max-sm:p-2">Position</th>
            <th className="p-4 max-sm:p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employee?.map((el, idx) => {
              return(
              <tr key={idx}>
                <td className="p-4 border-t max-sm:p-2">{idx + 1}</td>
                <td className="p-4 border-t max-sm:p-2">{el.name}</td>
                <td className="p-4 border-t max-sm:p-2">{el.position}</td>
                <td className="p-4 border-t flex gap-4 max-sm:p-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
