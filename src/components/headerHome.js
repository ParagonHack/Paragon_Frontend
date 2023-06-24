import Link from 'next/link';
import { selectAuthState, setAuthState } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from 'aws-amplify';


const HeaderHome = ({ signOut, user }) => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <nav className="px-10">
      <style>
      {`
          .navbar-nav {
            list-style: none;
            padding: 0;
          
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: space-between;
          }
          .navbar {
            width: 5rem;
            background: #1f2937;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
          }
          .content {
            margin-left: 5rem;
            padding: 1rem;
          }
          .navbar-bottom {
            margin-top: auto;
          }
        `}
      </style>
      <div className="navbar">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white text-xl font-bold cursor-pointer">Logo</span>
          </Link>
        </div>
        
        {/* Navigation links */}
        <div className="navbar-bottom">
          <div className="flex items-center">
            <Link href="/signin">
              <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">Saved</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/settings">
              <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">Settings</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/history">
              <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">History</span>
            </Link>
          </div>
          
          {/* Sign out button */}
          <div className="flex items-center">
          {authState &&
            <button onClick={() => {Auth.signOut().then(() => dispatch(setAuthState(false)))}}>
              Sign out
            </button>
          } </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
