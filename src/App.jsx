import { useState, useEffect } from 'react'
import StudentCard from './StudentCard'
import Navbar from './Navbar'
import './App.css'
import AddStudent from './AddStudent'


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Raj", branch: "ECE", year: "2nd" },
    { id: 2, name: "Priya", branch: "CSE", year: "3rd" },
    { id: 3, name: "Arjun", branch: "ME", year: "1st" }
  ])

  const handleAdd = (newStudent) => {
    setStudents([...students, newStudent])
  }

  const handleDelete = (id) =>{
    setStudents(students.filter((student) => student.id !== id))
  }
  useEffect(() => {
    document.title = "Student Dashboard"
  }, [])

  return (
    <div>
      <Navbar total={students.length} />
      <AddStudent onAdd={handleAdd} />
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          branch={student.branch}
          year={student.year}
          onDelete={handleDelete}
        />
      ))}
      
    </div>
  )
}



export default App