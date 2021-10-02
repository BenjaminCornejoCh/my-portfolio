
let options = [
    dragControl = false,
    freezeActive = false,
    pinchZoom = true,
    freezeDecel = false,
    noSelect = false,
]
window.onload = () => {
  try {
    TagCanvas.textColour = 'aquamarine'
    TagCanvas.initial = [0.4,0.2];
    TagCanvas.outlineColour = "rgba(0,0,0,0)";
    TagCanvas.textHeight = "22";
    TagCanvas.textFont = "Open Sans";
    TagCanvas.freezeActive = false;
    TagCanvas.wheelZoom = false
    TagCanvas.Start("myCanvas", '', options);
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById("myCanvasContainer").style.display = "none";
  }
};

let medidas = document.getElementById('myCanvasContainer')
// medidas.style.width = '100%'
// textColour = "#c77dffff",