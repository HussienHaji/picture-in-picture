const videoElemnt = document.getElementById("video");
const button = document.getElementById("btn");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElemnt.srcObject = mediaStream;
    videoElemnt.onloadedmetadata = () => {
      videoElemnt.play();
    };
  } catch (error) {}
}

button.addEventListener("click", async () => {
  button.disabled = true;

  await videoElemnt.requestPictureInPicture();

  button.disabled = false;
});
selectMediaStream();
