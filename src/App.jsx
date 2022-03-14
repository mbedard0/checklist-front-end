import { useEffect, useState } from 'react'
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

  const handleEdit = formData => {
    const newListArray = lists.map(list => list.id === formData.id ? formData : list)
    setLists(newListArray)
  }

  const handleDelete = listName => {
    setLists(lists.filter(list => list.listName !== listName))
  }

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing lists={lists} handleDelete={handleDelete}/>}/>
          <Route path="/create-list" element={<CreateList handleSubmit={handleSubmit}/>} />
          <Route path="/edit" element={<EditList handleEdit={handleEdit}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
