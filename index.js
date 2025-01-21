document.addEventListener("DOMContentLoaded", function () {
    // Slider content data
    const sliderData = [
        {
            image: '/images/baranti.webp',
            title: 'Welcome to King Sukh Guest House',
            description: 'Where luxury meets comfort. Your perfect getaway destination.',
            buttons: [
                { href: '#contact', text: 'Contact Us' },
                { href: '#services', text: 'Explore Services' }
            ]
        },
        {
            image: '/images/palash.webp',
            title: 'Make Yourself At Home',
            description: 'Relax in comfort with our premium rooms and exceptional services.',
            buttons: [
                { href: '#gallery', text: 'View Gallery' },
                { href: '#about', text: 'Learn More' }
            ]
        },
        {
            image: '/images/ayodhya.webp',
            title: 'Book Your Stay',
            description: 'Unforgettable memories await you at King Sukh Guest House.',
            buttons: [
                { href: 'https://wa.link/at5ion', text: 'Book Now' },
                { href: '#services', text: 'Explore More' }
            ]
        }
    ];

    const carouselContainer = document.getElementById('carouselItemsContainer');

    // Generate carousel items
    sliderData.forEach((slide, index) => {
        const isActive = index === 0 ? 'active' : '';
        const buttonsHTML = slide.buttons.map(button =>
            `<a href="${button.href}" class="btn btn-outline-light mx-2">${button.text}</a>`
        ).join('');

        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${slide.image}" class="d-block w-100" alt="${slide.title}">
                <div class="carousel-caption d-md-block text-white">
                    <h1>${slide.title}</h1>
                    <p>${slide.description}</p>
                    ${buttonsHTML}
                </div>
            </div>
        `;

        carouselContainer.insertAdjacentHTML('beforeend', carouselItem);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || 0;
            setTimeout(() => {
              entry.target.classList.add("show");
            }, delay * 400); // Delay in milliseconds
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );
  
    serviceItems.forEach(item => observer.observe(item));
  });
  