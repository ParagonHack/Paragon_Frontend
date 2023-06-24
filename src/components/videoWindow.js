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
        <div className="flex items-center flex-col justify-between bg-white h-100 w-1/2 rounded-3xl m-2 p-4">
            <span className="text-black">Videos</span>
            <div className="bg-black w-11/12 h-3/4"/>
            <div className="flex-row align-items-center justify-between w-11/12 h-10">
                <input className="text-black w-3/4 border-2 rounded-md border-black"
                       onChange={(e) => {setSearchInput(e.target.value)}}
                       value={searchInput}
                />
                <button className="h-full w-1/4 text-black" onClick={findMatch}>Search</button>
            </div>
        </div>
    )
}

export default VideoWindow
