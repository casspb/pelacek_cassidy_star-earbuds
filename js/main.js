(() => {

  // Variables
  const hotspots = document.querySelectorAll('.Hotspot');

  const hotspotInfo = [
    {
      id: 'hotspot-1',
      h2: 'Touch Controls',
      image: 'images/headphone-button.png',
      alt: 'close up on earbud with star button',
      p: 'Easy touch control button, made to withstand consistent use.'
    },
    {
      id: 'hotspot-2',
      h2: 'Ear Wrap',
      image: 'images/headphone-earwrap.png',
      alt: 'close up on earbuds with the part that wraps around your ear',
      p: 'Soft ear wrap to keep your headphones in no matter what, and removable for when you are going for a new look!'
    },
    {
      id: 'hotspot-3',
      h2: 'Silicon Earpiece',
      image: 'images/headphone-earpiece.png',
      alt: 'close up on earbud of the silicon ear piece',
      p: 'Comes in different sizes to fit what you need, and the comfort you desire!'
    },
    {
      id: 'hotspot-4',
      h2: 'Fast Charging',
      image: 'images/headphone-w-case.png',
      alt: 'earbuds displayed inside of the open charging case',
      p: 'Quick charging, and long lasting charge to keep the tunes going!'
    }
  ];

  // Function to show content dynamically
  function showContent() {
    hotspotInfo.forEach(data => {
      const hotspotElement = document.querySelector(`button[slot="${data.id}"]`); 
      
      if (hotspotElement) {
        const annotation = hotspotElement.querySelector('.HotspotAnnotation');
        

        const title = document.createElement('h2');
        const image = document.createElement('img');
        const description = document.createElement('p');

        title.textContent = data.h2;
        image.src = data.image;
        image.alt = data.alt;
        description.textContent = data.p;

        annotation.appendChild(title);
        annotation.appendChild(image);
        annotation.appendChild(description);

        // Make sure it's hidden initially
        annotation.style.visibility = 'hidden';
      }
    });
  }

  showContent();

  // Functions for hover effects (show/hide info)
  function showInfo(e) {
    let selected = e.currentTarget.querySelector('.HotspotAnnotation');
    gsap.to(selected, 0.5, { autoAlpha: 1, visibility: 'visible' });
  }

  function hideInfo(e) {
    let selected = e.currentTarget.querySelector('.HotspotAnnotation');
    gsap.to(selected, 0.5, { autoAlpha: 0, visibility: 'hidden' });
  }

  // Event listeners for hover effects
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

})();
