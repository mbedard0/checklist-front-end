import { Link } from 'react-router-dom'
import propic from '../icons/gary-vaynerchuk-hero1.svg'
import dog from '../icons/dog-face.svg'

const LandingTopBar = (props) => {
  return (
    <>
        <div className="mt-[32px]">
          <div className="flex items-center">
            <div className="avatar">
              <div className="rounded-full w-[40px]">
                <img src={dog} alt="gary vaynerchuk" />
              </div>
            </div>
            <div className="flex-auto font-bold text-lg ml-[16px] p-0">
              Checklist
            </div>
            <div className="flex items-center justify-center active:text-cursor-teal w-[40px] h-[40px] hover:bg-hover rounded">
              <Link to="/create-list" className="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-auto ">
                  <path d="M22.9828 1.89377C24.0094 2.91892 24.0094 4.58111 22.9828 5.60626L21.5766 7.0172L16.9828 2.42439L18.3938 1.01533C19.4203 -0.00999215 21.0797 -0.00999215 22.1063 1.01533L22.9828 1.89377ZM8.08125 11.3297L15.9234 3.4847L20.5172 8.07658L12.6703 15.9188C12.3844 16.2094 12.0328 16.425 11.6438 16.5563L7.48125 17.9438C7.03594 18.075 6.63281 17.9719 6.32813 17.6297C6.02813 17.3672 5.925 16.9219 6.05625 16.5188L7.44375 12.3563C7.575 11.9672 7.79063 11.6156 8.08125 11.3297ZM9 2.95783C9.82969 2.95783 10.5 3.67173 10.5 4.45783C10.5 5.3297 9.82969 5.95783 9 5.95783H4.5C3.67172 5.95783 3 6.67033 3 7.45783V19.5C3 20.3297 3.67172 21 4.5 21H16.5C17.3297 21 18 20.3297 18 19.5V14.9578C18 14.1703 18.6703 13.4578 19.5 13.4578C20.3297 13.4578 21 14.1703 21 14.9578V19.5C21 21.9844 18.9844 24 16.5 24H4.5C2.01469 24 0 21.9844 0 19.5V7.45783C0 4.97345 2.01469 2.95783 4.5 2.95783H9Z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </>
      );
}

      export default LandingTopBar;