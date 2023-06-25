import Header from "../components/header";
import {Authenticator} from "@aws-amplify/ui-react";
import { selectAuthState, setAuthState, setInitialState, setChatHistory } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from 'aws-amplify';

export default function SignIn() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-screen w-screen">
        <Header/>
        {!authState && <div className="h-20"/>}
        <Authenticator>
            {({ signOut, user }) => {
              Auth.currentAuthenticatedUser().then(() => {
                dispatch(setAuthState(true))
                window.location.href = '/home'
              }).catch(() => {
                signOut();
                dispatch(setAuthState(false))
                dispatch(setInitialState({}))
                window.location.href = '/'
              })
            }}
        </Authenticator>
    </div>
  );
}