import Link from 'next/link';
import { selectAuthState, setAuthState } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from 'aws-amplify';

const Header = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white text-xl font-bold cursor-pointer">Logo</span>
          </Link>
        </div>
        <div className="flex items-center">
          {authState &&
            <button onClick={() => {Auth.signOut().then(() => dispatch(setAuthState(false)))}}>
              Sign out
            </button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Header
