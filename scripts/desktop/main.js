const body = document.body; // <body> Element.

const MIN_WIDTH = 576;
const MIN_HEIGHT = 1024;

// Construction of the resolution warning.
const resolutionWarningElement = document.createElement("div");

resolutionWarningElement.id = "resolutionWarning";
resolutionWarningElement.style.width = "fit-content";
resolutionWarningElement.style.height = "fit-content";
resolutionWarningElement.style.position = "fixed";
resolutionWarningElement.style.top = "50%";
resolutionWarningElement.style.left = "50%";
resolutionWarningElement.style.transform = "translate(-50%, -50%)";
resolutionWarningElement.style.display = "none";
resolutionWarningElement.textContent = "!! NaN x NaN !!"

body.appendChild(resolutionWarningElement);
// END of construction of the resolution warning.

addEventListener("resize", () => {
  const bodyWidth = body.clientWidth;
  const bodyHeight = body.clientHeight;
  
  if ((bodyWidth < MIN_WIDTH || bodyHeight < MIN_HEIGHT) && resolutionWarningElement.style.display != "box") {
    resolutionWarningElement.style.display = "box";
    resolutionWarningElement.textContent = "!! " + bodyWidth + " x " + bodyHeight + " !!";
  } else {
    resolutionWarningElement.style.display = "none";
  }
});