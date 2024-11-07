(() => {
  console.log("IIFE Fired");

  
  //Variables
  const hotspots = document.querySelectorAll('.Hotspot');


//functions
function showInfo(e) {
  //console.log("showInfo called");
  //console.log(e.currentTarget.slot);
  let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
  //button and slot value = whatever the user is hovered over
  //`$ allows for dynamic values
  //console.log(selected)
  gsap.to(selected, 1, {autoAlpha: 1});
}

function hideInfo(e) {
  //console.log("hideInfo called");
  let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
  gsap.to(selected, 1, {autoAlpha: 0});
}

//eventListeners
hotspots.forEach(hotspot => {
  hotspot.addEventListener("mouseover", showInfo);
  hotspot.addEventListener("mouseout", hideInfo);
})



})();