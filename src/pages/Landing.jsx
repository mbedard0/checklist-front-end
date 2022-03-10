import AddListContainer from "../components/AddListContainer";
import Lists from "../components/Lists";
import { Link } from 'react-router-dom'

const Landing = (props) => {
  return ( 
    <>
      <div className="desktop-sm:mx-[40px] desktop-lg:mx-[40px] mobile:mx-[24px] mt-[32px]">
        <div className="flex">
          <div className="flex-auto">Icon</div>
          <div className="flex-auto">Lists</div>
          <div className="flex-auto"><Link to="/create-list">Create Icon</Link></div>
        </div>        
        {props.lists.length > 0 ?
            <Lists lists={props.lists}/>
          :
          ''
        }
        <AddListContainer />
      </div>
    </>
  );
}

export default Landing;