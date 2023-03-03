//toggling stream visibility, the streams won't load the the start if you don't enable them
function toggle(elementId) {
        var element = document.getElementById(elementId);
        if (!element) {
          console.log("Element not found: " + elementId);
          return;
        }
        if (element.style.display === "block") {
          element.style.display = "none";
        } else {
          element.style.display = "block";
        }
        // reorganize the iframes using flexbox
        var streams = document.querySelector(".streams");
        streams.style.display = "flex";
        streams.style.flexWrap = "wrap";
        var streamContainers = document.querySelectorAll(".stream-container");
        var numStreams = streamContainers.length;
        for (var i = 0; i < numStreams; i++) {
          streamContainers[i].style.width = "50%";
          streamContainers[i].style.height = "50vh";
        }
      }
