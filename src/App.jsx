import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { BrowserRouter,Route,Link ,Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter basename={"/TaskManagement/"}>
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className ="text-2xl font-bold mb-4 text-center text-indigo-700"> Task Management</h1>
                <Routes>
<Route  path="/" element={<div><AddTask/><TaskList/></div>}/>
     
       </Routes>
   
      </div>
    </div>

    </BrowserRouter>   
  )
}

export default App
