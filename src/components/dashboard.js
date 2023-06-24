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
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center bg-color-blue">
        </div>
        <div className="flex items-center">
        </div>
      </div>
  )
}

export default Dashboard
