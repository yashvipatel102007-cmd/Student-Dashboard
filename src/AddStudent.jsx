import { useState } from 'react'

function AddStudent({ onAdd }) {
  const [name, setName] = useState("")
  const [branch, setBranch] = useState("")
  const [year, setYear] = useState("")

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={() => {
        onAdd({ id: Date.now(), name, branch, year })
        setName("")
        setBranch("")
        setYear("")
        }}>Add Student</button>
    </div>
  )
}




export default AddStudent