import { useState } from 'react'

function AddStudent({ onAdd }) {
  const [name, setName] = useState("")
  const [branch, setBranch] = useState("")
  const [year, setYear] = useState("")

  return (
    <div className='flex justify-center items-center gap-3 p-4'>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-500'
      />
      <input
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        className='border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-500'
      />
      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className='border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-500'
      />
      <button 
       className='bg-blue-600 text-white px-4 py-2 rounded-lg'
        onClick={() => {
          if(!name.trim()) {
            alert("Please enter a name!")
            return
          }
          onAdd({ id: Date.now(), name, branch, year })
          setName("")
          setBranch("")
          setYear("")
        }}>Add Student</button>
    </div>
  )
}

export default AddStudent