import Link from 'next/link';
import { selectAuthState, setAuthState } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from 'aws-amplify';

const Header = () => {
 
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white text-xl font-bold cursor-pointer">Logo</span>
          </Link>
        </div>
        <div className="flex items-center">
           <Link href="/signin">
              <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50r">Sign In</span>
           </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
