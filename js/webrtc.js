const socket = io('/')
const videoGrid = document.getElementById('video-grid')

var peer = new Peer()
var peer_calls = {}
const vid = document.createElement('video')
vid.muted = true

navigator.mediaDevices.getUserMedia({video: true, audio: true }).then(stream => {
    addVideoStream(vid, stream)
    peer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', peerVideoStream => {
            addVideoStream(video, peerVideoStream)
        })
    })
    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream)
    })
})

function connectToNewUser(userId, stream) {
    const call = peer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', peerVideoStream => {
        addVideoStream(video, peerVideoStream)
    })
    call.on('close', () => {
        video.remove()
    })
    peer_calls[userId] = call
}

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}

peer.on('open', function(id) {
    socket.emit('join-room', ROOM_ID, id)
})

socket.on('user-disconnected', userId => {
    if (peer_calls[userId])
        peer_calls[userId].close()
})
