import { useEffect } from 'react'
import StudentCard from './StudentCard'
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Student Dashboard"
  }, [])

  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentCard name="Raj" branch="ECE" year="2nd" />
      <StudentCard name="Priya" branch="CSE" year="3rd" />
      <StudentCard name="Arjun" branch="ME" year="1st" />
    </div>
  )
}

export default App