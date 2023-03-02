//toggling stream visibility, the streams won't load the the start if you don't enable them
function toggle(elementId) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.log("Element not found: " + elementId);
    return;
  }
  if (element.style.display === "block") {
    element.style.display = "none";
  } else (element.style.display === "none") {
    element.style.display = "block";
  }
}
