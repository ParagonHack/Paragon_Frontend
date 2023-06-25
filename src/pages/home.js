import HeaderHome from "../components/headerHome";
import Dashboard from "../components/dashboard";
import {Authenticator} from "@aws-amplify/ui-react";
import { selectAuthState, setAuthState, setInitialState, setChatHistory } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import dataManager from '../helpers/dataManager'
import {Auth} from "aws-amplify";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
     Auth.currentAuthenticatedUser()
        .then(() => {
          console.log("LOADING USER DATA")
          dispatch(setAuthState(true))
          dataManager.getChats().then(chats => {
            dispatch(setChatHistory(chats))
          })})
        .catch(() => {
          window.location.href = '/'
        })
  }, [])

  return (
    <div className="flex flex-row h-screen w-screen">
      <HeaderHome/>
      <Dashboard/>
    </div>
  )
}