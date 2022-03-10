import AddListContainer from "../components/AddListContainer";
import Lists from "../components/Lists";
import { Link } from 'react-router-dom'
import edit from '../icons/create-icon.svg'
import propic from '../icons/gary-vaynerchuk-hero1.svg'

const Landing = (props) => {
  return (
    <>
      <div className="desktop-sm:mx-[40px] desktop-lg:mx-[40px] mobile:mx-[24px]">
        <div className="mt-[32px]">
          <div className="flex items-stretch">
            <div className="flex-none">
              <div className="avatar">
                <div className="rounded-full w-[40px]">
                  <img src={propic} alt="gary vaynerchuk" />
                </div>
              </div>
            </div>
            <div className="flex-none font-bold text-lg ml-[16px]">
              Lists
            </div>
            <div className="flex-auto">
              <Link to="/create-list">
                <img src={edit} alt="edit icon" className="ml-auto mobile:mr-[16px] desktop-sm:mr-[40px]" /></Link>
            </div>
          </div>
          <div className="mt-[24px]">
            {props.lists.length > 0 ?
              <Lists lists={props.lists} />
              :
              <AddListContainer />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;