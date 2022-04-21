const video = document.getElementById('video');
const button = document.getElementById('button');

// Hide video element to show only pic in pic
video.hidden = true;

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // To start capturing video from the screen, you call getDisplayMedia() on the instance of Media navigator.mediaDevices
        // The Promise returned by getDisplayMedia() resolves to a MediaStream which streams the captured media.(MDN)
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Assign the mediaStream as media source to video
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        };
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await video.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();
