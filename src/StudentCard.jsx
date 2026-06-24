import { useState } from 'react'

function StudentCard({id, name, branch, year, onDelete}) {
  const [likes, setLikes] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className='card'>
      <h2>Name: {name}</h2>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>Branch: {branch}</p>
          <p>Year: {year}</p>
        </div>
      )}

      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
      <button onClick={() => setLikes(0)}>Reset</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default StudentCard