import { Authenticator } from "@aws-amplify/ui-react";
import Header from "../components/header";
import VideoPlayer from "../components/video_player";
import createS3Object from '../helpers/s3Object'
import GetObjectCommand from 'aws-sdk/clients/s3'

export default function Home() {

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

  loadVideoDescription()

  return (
    <div>
    <Header />

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Authenticator >
        {({ signOut, user }) => (
          <main>
            <h1>Hello, {user.username}!</h1>
              {/*<div style={{width: '100%'}}>
                <VideoPlayer fileKey='videos/video_id=12345/video.mp4' />
            </div>
            */}
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
    </div>
  )
}