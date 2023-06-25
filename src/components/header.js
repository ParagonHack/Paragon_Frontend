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
        <Link href="/">
          <span className="text-white text-xl font-bold cursor-pointer">Logo</span>
        </Link>
        {!isSsr && window.location.pathname !== '/signin' &&
          <Link href="/signin">
            <span className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50r">
              {authState ? 'Start' : 'Sign In'}
            </span>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Header
