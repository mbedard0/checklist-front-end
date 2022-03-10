import { Link } from 'react-router-dom'

const AddListContainer = () => {
  return (
    <>
      <div className='flex rounded-lg border-[.75px] border-stroke-color'>
        <div className='flex-auto'>Create a List</div>
        <div className='flex-auto'><Link to="/create-list">Plus sign icon</Link></div>
      </div>
    </>
  );
}

export default AddListContainer;