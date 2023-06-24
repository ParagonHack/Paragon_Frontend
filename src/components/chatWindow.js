const ChatWindow = () => {

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
      <div className="flex items-center flex-col bg-white h-100 w-3/12 rounded-3xl m-2">
          <span className={"mt-2 text-black"}>Chat</span>
      </div>
  )
}

export default ChatWindow
