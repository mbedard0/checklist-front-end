import { Link } from 'react-router-dom'
import plusSign from '../icons/plus-sign.svg'

const AddListContainer = () => {
  return (
    <>
      <div className='flex rounded-lg border-[.75px] border-stroke-color hover:drop-shadow-sm h-[60px]'>
        <div className='flex-auto text-sm-md ml-[16px] mt-[14px]'>Create a List</div>
        <div className='flex-none mt-[18px] mr-[16px] ml-[16px]'>
          <Link to="/create-list"><img src={plusSign} alt="plus sign"/></Link>
        </div>
      </div>
    </>
  );
}

export default AddListContainer;