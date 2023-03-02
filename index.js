//toggling stream visibility, the streams won't load the the start if you don't enable them
function toggle(element) {
  if (element.style.display === "block") {
    document.getElementById(element).style.display = 'none';
  } else if(element.style.display === "none") {
    document.getElementById(element).style.display = 'block';
  } else {
    document.createTextNode("Error while loading some of the streams (Error 0)");
    document.body.appendChild(textNode);
  }
}
