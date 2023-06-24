import {selectVideo, setVideo} from "../store/slices";
import { useDispatch, useSelector } from "react-redux";

const VideoWindow = () => {
    const selected_video = useSelector(selectVideo);
    const dispatch = useDispatch();

    console.log("Selected VIDEO: ", selected_video)

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
        <div className="flex items-center flex-col bg-white h-100 w-1/2 rounded-3xl m-2">
            <span className={"mt-2 text-black"}>Videos</span>
        </div>
    )
}

export default VideoWindow
