function Navbar({ total }) {
  return (
    <div className="bg-gray-900 text-white flex justify-between px-8 py-4 text-2xl font-bold">
      <h1>Student Dashboard</h1>
      <p>Total Students: {total}</p>
    </div>
  )
}

export default Navbar