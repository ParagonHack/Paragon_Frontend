import { Authenticator } from "@aws-amplify/ui-react";
import Header from "../components/header";
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
      <Authenticator socialProviders={[, 'apple', 'facebook', 'google']}>
        {({ signOut, user }) => (
          <main>
            <h1>Hello, {user.username}!</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
    </div>
      

    
  );
}