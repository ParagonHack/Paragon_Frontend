import Header from "../components/header";
import Dashboard from "../components/dashboard";
import {Authenticator} from "@aws-amplify/ui-react";
import { selectAuthState, setAuthState, setInitialState, setChatHistory } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import dataManager from '../helpers/dataManager'

export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState) {
      console.log("LOADING USER DATA")
      dataManager.getChats().then(chats => {
        dispatch(setChatHistory(chats))
      })
    } else {
      dispatch(setInitialState({}))
    }
  }, [authState])

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
        {!authState && <div className="h-20"/>}
        <Authenticator>
            {({ signOut, user }) => {
              Auth.currentAuthenticatedUser().then(() => {
                dispatch(setAuthState(true))
              }).catch(() => {
                signOut();
                dispatch(setAuthState(false))
              })
              return <Dashboard/>
            }}
        </Authenticator>
    </div>
  )
}