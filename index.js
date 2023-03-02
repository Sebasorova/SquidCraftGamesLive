//toggling stream visibility, the streams won't load the the start if you don't enable them
function toggleElement(elementId) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.log("Element not found: " + elementId);
    return;
  }
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
