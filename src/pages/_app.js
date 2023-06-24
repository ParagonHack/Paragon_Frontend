import { Amplify, Auth } from "aws-amplify"
import awsExports from "../aws-exports"
import "@aws-amplify/ui-react/styles.css"
import './globals.css'
import { wrapper } from "../store/store";

Amplify.configure({ ...awsExports, ssr: true })
Auth.configure({...awsExports})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)