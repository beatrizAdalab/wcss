"use strict";

// Horse eye movements - Aman(@adsingh14)

var eyelid = document.getElementById("eyelid");

document.body.addEventListener("keydown", function(wink) {
  if (wink.keyCode == 32) {
    setTimeout(function() {
      eyelid.style.animationName = "eyelid";
    }, 200);
    eyelid.style.animationName = "";
  }
});
