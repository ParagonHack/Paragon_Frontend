import Link from 'next/link';
import { selectAuthState } from "../store/slices";
import { useSelector } from "react-redux";
import { useIsSsr } from "../helpers/useIsSsr"

const Header = () => {
  const authState = useSelector(selectAuthState);
  const isSsr = useIsSsr();


  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" to="first" style={{ textDecoration: 'none' }}>
          <span className="text-white text-xl font-bold cursor-pointer">Logo</span>
        </Link>
        {!isSsr && window.location.pathname !== '/signin' &&
          <Link href="/signin" to="first" style={{ textDecoration: 'none' }}>
            <span className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              {authState ? 'Start' : 'Sign In'}
            </span>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Header
