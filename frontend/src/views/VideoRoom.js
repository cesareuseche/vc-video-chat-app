import React, { createRef } from 'react'
import "../styles/VideoRoom.css"
import VideoChat from '../components/VideoChat';

function VideoRoom() {
    const localVideo = createRef();

    const constraints = { video: true }

    const success = (stream) => {
        localVideo.current.srcObject = stream
    }

    const failure = e => {
        console.log('getUserMedia Error: ', e)
    }

    navigator.mediaDevices.getUserMedia(constraints)
        .then(success)
        .catch(failure)

    return (
        <div className="video-wrapper">
            <video ref={localVideo} autoPlay></video>
        </div>
    )
}

export default VideoRoom
