import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Landing from './pages/Landing';
import CreateList from './pages/CreateList';
import './App.css';
import EditList from './pages/EditList';

const App = () => {
  const [lists, setLists] = useState([])

  const handleSubmit = formData => {
    setLists([...lists, formData])
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing lists={lists}/>}/>
        <Route path="/create-list" element={<CreateList handleSubmit={handleSubmit}/>} />
        <Route path="/edit" element={<EditList></EditList>} />
      </Routes>
    </>
  );
}

export default App;
