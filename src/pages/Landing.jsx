import AddListContainer from "../components/AddListContainer";
import Lists from "../components/Lists";
import LandingTopBar from "../components/LandingTopBar";

const Landing = (props) => {
  return (
    <>
      <div className="desktop-sm:mx-[40px] desktop-lg:mx-[40px] mobile:mx-[24px]">
        <LandingTopBar />
        <div className="mt-[24px]">
          {props.lists.length > 0 ?
            <Lists lists={props.lists} handleDelete={props.handleDelete} />
            :
            <AddListContainer />
          }
        </div>
      </div>
    </>
  );
}

export default Landing;