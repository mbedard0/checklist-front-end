import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const CreateList = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    listName: ''
  })
  const [cancelIcon, setCancelIcon] = useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      id: Math.random().toString()
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
              className="flex flex-auto text-sm text-default hover:text-off-black active:text-cursor-teal"
              onMouseOver={() => setCancelIcon(true)}
              onMouseOut={() => setCancelIcon(false)}
            >
              <svg width="9" height="16" viewBox="0 0 9 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='self-center'>
                <path d="M7.87507 15.875C7.58721 15.875 7.29921 15.7651 7.07983 15.5454L0.329834 8.79541C-0.109619 8.35596 -0.109619 7.64404 0.329834 7.20459L7.07983 0.45459C7.51928 0.0151367 8.2312 0.0151367 8.67065 0.45459C9.1101 0.894043 9.1101 1.60596 8.67065 2.04541L2.71589 8L8.67135 13.9555C9.11081 14.3949 9.11081 15.1068 8.67135 15.5463C8.45163 15.766 8.16335 15.875 7.87507 15.875Z" fill="currentColor" />
              </svg>
              <Link to="/" className='ml-[4px] font-bold'>
                Cancel
              </Link>
            </div>
            <button className="ml-auto text-sm text-default hover:text-off-black active:text-cursor-teal font-bold" disabled={isFormInvalid()}>Done</button>
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