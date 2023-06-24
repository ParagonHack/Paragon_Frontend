import VideoPlayer from "./video_player";
import ChatWindow from "./chatWindow";
import VideoWindow from "./videoWindow";
import ChatHistory from "./chatHistory";
import HeaderHome from "./headerHome";


const Dashboard = () => {

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
      <div className="flex h-full w-full flex-row justify-around">
          <HeaderHome/>
          <ChatHistory/>
          <VideoWindow/>
          <ChatWindow/>
      </div>
  )
}

export default Dashboard
