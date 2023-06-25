import Link from 'next/link';
import { setInitialState } from "../store/slices";
import { useDispatch } from "react-redux";
import { Auth } from 'aws-amplify';

const HeaderHome = ({ signOut, user }) => {
  const dispatch = useDispatch();

  return (
    <nav className="w-1/12 bg-gray-900 flex flex-col items-center justify-between pt-6 pb-4">
      <Link href="/" to="first" style={{ textDecoration: 'none' }}>
        <span className="text-white text-xl font-bold">Logo</span>
      </Link>

      <div className="navbar-bottom flex items-center flex-col h-1/6 justify-around">
        <Link href="/new_chat" to="first" style={{ textDecoration: 'none' }}>
          <span className="block rounded-lg text-base font-semibold text-white hover:bg-gray-50 px-2">New Chat</span>
        </Link>
        <Link href="/history" to="first" style={{ textDecoration: 'none' }}>
          <span className="block rounded-lg text-base font-semibold text-white hover:bg-gray-50 px-2">History</span>
        </Link>

        <button className="bg-red-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300" onClick={() => {
          Auth.signOut().then(() => {dispatch(setInitialState({})); window.location.href='/'})
        }}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default HeaderHome;
