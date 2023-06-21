import { Authenticator } from "@aws-amplify/ui-react";
import Header from "../components/header";
import VideoPlayer from "../components/video_player";

export default function Home() {
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
            <div style={{width: '100%'}}>
                <VideoPlayer fileKey='videos/video_id=12345/video.mp4' />
            </div>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
    </div>
  )
}