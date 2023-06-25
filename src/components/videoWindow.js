import {selectVideo, selectChatHistory, setVideo, setChatHistory} from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dataManager from "../helpers/dataManager";

const VideoWindow = () => {
    const selected_video = useSelector(selectVideo);
    const chat_history = useSelector(selectChatHistory);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");

    const findMatch = () => {
        //Need to implement API endpoint
        //and create new chat
        let new_chat_history = {...chat_history}
        new_chat_history[searchInput] = [{
            "message": searchInput,
            "role": "user"
        }]
        dataManager.saveChats(new_chat_history).then(() => {
            dispatch(setChatHistory(new_chat_history))
            setSearchInput('')
        })
    }

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
        <div className="flex flex-col h-screen bg-gray-900 rounded-3xl">
            <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl">Matched Videos</h1>
            <div className="bg-black w-11/12 h-3/4"/>

        </div>
    )
}

export default VideoWindow
