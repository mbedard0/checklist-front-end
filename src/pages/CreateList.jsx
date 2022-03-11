import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import cancelDefault from '../icons/cancel-default.svg'
import cancelHover from '../icons/cancel-hover.svg'


const CreateList = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    listName: ''
  })
  const [cancelIcon, setCancelIcon] = useState(false)

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
    <div className="desktop-sm:mx-[40px] desktop-lg:mx-[40px] mobile:mx-[24px] mt-[32px] grid grid-rows-1">
      <form
        onSubmit={handleSubmit}
      >
      <div className="flex mb-[24px]">
        <div 
          className="flex flex-auto text-sm text-default hover:text-off-black"
          onMouseOver={() => setCancelIcon(true)}
          onMouseOut={() => setCancelIcon(false)}
        >
          <img
            src={cancelIcon ? cancelHover : cancelDefault}
            alt="cancel icon"
          />
          <Link to="/" className='ml-[4px] font-bold'>
            Cancel
          </Link>
        </div>
        <button className="ml-auto mobile:mr-[16px] desktop-sm:mr-[40px] hover:text-off-black font-bold" disabled={isFormInvalid()}>Done</button>
      </div>
        <input
          placeholder='List title'
          type="text"
          name="listName"
          value={listName}
          onChange={handleChange}
          className="focus:outline-none input input-ghost w-full caret-cursor-teal leading-[24px]text-[28px] text-md p-0 font-semibold"
        />
      </form>
    </div>
    </>
  );
}

export default CreateList;