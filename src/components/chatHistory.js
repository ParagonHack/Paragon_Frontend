import {selectChatHistory, setChatHistory} from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dataManager from "../helpers/dataManager";

const ChatHistory = () => {
    const chat_history = useSelector(selectChatHistory)
       /*
  const loadVideoDescription = async () => {
        const s3 = await createS3Object()
        const url = s3.getSignedUrl('getObject', {Bucket: s3.config.Bucket, Key: 'videos/video_id=12345/metadata.json'})
        const json = await fetch(url)
            .then((response) => response.json())
            .catch((error) => {
              console.error(error)
            })
        console.log(json)
        return json
  }

   */
  return (
      <div className="flex items-center flex-col bg-white h-100 w-1/6 rounded-3xl m-2 p-4"style={{ marginLeft: '20px' }}>
          <span className={"text-black"}>Chat History</span>
          {Object.keys(chat_history).map(k => {
              return <span className={"text-black"}>{k}</span>
          })}
      </div>
  )
}

export default ChatHistory
