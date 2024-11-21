(() => {
  
    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor(){
        console.log(slider.value);

        divisor.style.width = slider.value+"%";
    }

    //listening for the user to slide and calling the function move divisor
    slider.addEventListener("input", moveDivisor)


})();