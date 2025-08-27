import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes , Route , Link} from 'react-router-dom'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
       <BrowserRouter basename={"/TaskManagement/"}>
    <Routes>
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className ="text-2xl font-bold mb-4 text-center text-indigo-700"> Task Management</h1>
      <AddTask/>
      <TaskList/>
      </div>
    </div>

       </Routes>
 </BrowserRouter>
  )
}

export default App
