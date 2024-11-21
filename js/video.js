(() => {
    function runAnimation() {
        if (window.innerWidth >= 768) {
            const canvas = document.querySelector("#explode-view");
            const context = canvas.getContext("2d");

            canvas.width = 1920;
            canvas.height = 1080; 

            const frameCount = 569;
            const images = [];
            const buds = { frame: 0 };

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = `images/earbuds-video-frames${(i + 1).toString().padStart(3, '0')}.png`;
                images.push(img);
            }

            gsap.to(buds, {
                frame: 449,
                snap: "frame",
                scrollTrigger: {
                    trigger: "main",
                    pin: true,
                    scrub: 1,
                    start: "top top",
                },
                onUpdate: render
            });

            function render() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[buds.frame], 0, 0);
            }

            images[0].addEventListener("load", render);
        }
    }


    runAnimation();

    window.addEventListener("resize", () => {
        runAnimation();
    });
})();
