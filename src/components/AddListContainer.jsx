import { Link } from 'react-router-dom'
import plusSign from '../icons/plus-sign.svg'

const AddListContainer = () => {
  return (
    <>
      <div className='flex items-center rounded-lg border-[.75px] border-stroke-color hover:drop-shadow-sm h-[60px] desktop-lg:mx-[344px] active:bg-hover'>
        <div className='flex-auto text-sm-md ml-[16px] font-semibold'>Create a List</div>
        <div className='flex-none mr-[16px] ml-[16px]'>
          <Link to="/create-list"><img src={plusSign} alt="plus sign" className=''/></Link>
        </div>
      </div>
    </>
  );
}

export default AddListContainer;