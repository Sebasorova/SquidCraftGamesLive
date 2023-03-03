function toggleElement(elementId) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.log("Element not found: " + elementId);
    return;
  }
  if (element.style.display === "block") {
    // Hide the element by removing it from the DOM
    element.remove();
  } else {
    // Show the element by adding it back to the DOM
    var container = document.querySelector(".streams");
    container.appendChild(element);
  }
  // reorganize the iframes using flexbox
  var streams = document.querySelector(".streams");
  streams.style.display = "flex";
  streams.style.flexWrap = "wrap";
  var streamContainers = document.querySelectorAll(".stream-container");
  var numStreams = streamContainers.length;
  for (var i = 0; i < numStreams; i++) {
    streamContainers[i].style.width = "100%";
    streamContainers[i].style.height = "100%";
  }
}
