import React, { useEffect, useRef } from 'react'
import { ConsoleLogger as Logger } from '@aws-amplify/core'
import { Auth } from 'aws-amplify'
import VideoJs from 'video.js'
import createS3Object from '../helpers/s3Object'
const logger = new Logger('VideoComponent')

const videoJsOptions = {
  // techOrder: ['html5', 'flash'],
  controls: false,
  autoplay: true,
  fluid: false,
  loop: false,
  width: '100%',
  aspectRatio: '16:9'
}

const VideoPlayer = ({ fileKey }) => {
  const videoContainer = useRef()

  //  Setup the player
  useEffect(() => {
    //  Setting content like this because player.dispose() remove also the html content
    videoContainer.current.innerHTML = `
      <div data-vjs-player>
        <video class="video-js" />
      </div>
    `
    //  Setting logger level to all for dev
    //if (process.env.NODE_ENV === 'development') {
    //  VideoJs.log('all')
    //}

    createS3Object().then(s3 => {
      const url = s3.getSignedUrl('getObject', {Bucket: s3.config.Bucket, Key: fileKey})
      console.log("URL: ", url + '#.mp4')
      const player = VideoJs(videoContainer.current.querySelector('video'), videoJsOptions, async () => {
        logger.debug(`Version of video.js is ${VideoJs.VERSION}`)
        player.src(url + '#.mp4')
      })

      //  When destruct dispose the player
      return () => player.dispose()
    })
  }, [fileKey])

  return <div ref={videoContainer} />
}

export default VideoPlayer