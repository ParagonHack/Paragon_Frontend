import Link from 'next/link';
import { setInitialState } from "../store/slices";
import { useDispatch } from "react-redux";
import { Auth } from 'aws-amplify';

const HeaderHome = ({ signOut, user }) => {
  const dispatch = useDispatch();

  return (
    <nav className="w-1/12 bg-gray-900 flex flex-col items-center justify-between pt-6 pb-4">
      <Link href="/">
        <span className="text-white text-xl font-bold">Logo</span>
      </Link>

      <div className="navbar-bottom flex items-center flex-col h-1/6 justify-around">
        <Link href="/settings">
          <span className="block rounded-lg text-base font-semibold text-white hover:bg-gray-50 px-2">Settings</span>
        </Link>
        <button className="block rounded-lg text-base font-semibold text-white hover:bg-gray-50 px-2" onClick={() => {
          Auth.signOut().then(() => {dispatch(setInitialState({})); window.location.href='/'})
        }}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default HeaderHome;
