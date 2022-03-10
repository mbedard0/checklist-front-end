import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const CreateList = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    listName: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleSubmit(formData)
      navigate('/')
    } catch {
      console.log(e)
    }
  }

  const { listName } = formData

  const isFormInvalid = () => {
    return !(listName)
  }

  return (
    <>
    <div className="desktop-sm:mx-[40px] desktop-lg:mx-[40px] mobile:mx-[24px] mt-[32px]">
      <form
        onSubmit={handleSubmit}
      >
      <div className="flex mb-[24px]">
        <div className="flex-auto text-sm text-default hover:text-off-black"><Link to="/">Cancel</Link></div>
        <button className="flex-auto text-sm text-default hover:text-off-black" disabled={isFormInvalid()}>Done</button>
      </div>
        <input
          placeholder='List title'
          type="text"
          name="listName"
          value={listName}
          onChange={handleChange}
          className="focus:outline-none input input-ghost w-full max-w-xs caret-cursor-teal leading-[24px]text-[28px] text-md"
        />
      </form>
    </div>
    </>
  );
}

export default CreateList;