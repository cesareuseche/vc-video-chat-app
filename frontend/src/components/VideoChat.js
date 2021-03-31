import React from 'react'
import "../styles/VideoChat.css"
import openSocket from "socket.io-client"


function VideoChat() {
    const socket = openSocket('http://localhost:8080')

    return (
        <div>
            <div className="chat">
                <h1>Test</h1>
            </div>
        </div>
    )
}

export default VideoChat
