import Header from "../components/header";
import Dashboard from "../components/dashboard";
import {Authenticator} from "@aws-amplify/ui-react";
import { selectAuthState, setAuthState, setInitialState, setChatHistory } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import dataManager from '../helpers/dataManager'

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
     <Header/>
       
    </div>
  )
}