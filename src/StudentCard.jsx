import { useState } from 'react'

function StudentCard({id, name, branch, year, onDelete}) {
  const [likes, setLikes] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="bg-gray-100 shadow-md rounded-xl p-6 max-w-md mx-auto m-8 items-center text-center" >
      <h2 className='text-black text-2xl text-center font-bold'>Name: {name}</h2>

      <button className='bg-blue-500 px-4 py-2 rounded-lg text-white m-3 ' onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>Branch: {branch}</p>
          <p>Year: {year}</p>
        </div>
      )}

      <p className='text-center my-2 text-lg'>Likes: {likes}</p>
      <button  className='bg-green-500 px-4 py-2 rounded-lg text-white m-3' onClick={() => setLikes(likes + 1)}>👍 Like</button>
      <button className='bg-gray-400 px-4 py-2 rounded-lg text-white m-3' onClick={() => setLikes(0)}>Reset</button>
      <button className='bg-red-500 px-4 py-2 rounded-lg text-white m-3' onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default StudentCard