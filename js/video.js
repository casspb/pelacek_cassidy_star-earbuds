(() => {

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080; 

    const frameCount = 569; // how many frames do we have

    const images = []; // array to hold ll of our images 

    //holds current frame, create an object called buds to hold the current frame
    const buds = {
        frame: 0
    }
    // run a for loop to populate image array
    for(let i = 0; i  < frameCount; i++){
        const img = new Image();
        //need to set source attriubte of the image toString converts the interger to a string
        img.src = `images/earbuds-video-frames${(i+1).toString().padStart(3, '0')}.png`;
        images.push(img)

    }

    //console.log(images);

    //what do you want to animate ? the buds object buds has a framecount so you increase buds framecount by 1  
    gsap.to(buds, {
        frame: 449, 
        snap: "frame",
        //greensock goes by decimals so you use snap to make it full values 
        scrollTrigger:{
            //what is the trigger? the canvas
            trigger:"#explode-view",
            pin: true, // this pins it down in one place
            scrub: 1, //control how the animation plays in regards to smoothness
    
            start: "top 15%",
        },
        onUpdate: render
    })

    images [0].addEventListener("load", render)

    //define render function 
    function render(){
        //this makes it so it doesnt draw an iamge over an image, and only has one image on the page, instead of overlapping
        context.clearRect(0,0, canvas.width, canvas.height);
        console.log (images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }


})();