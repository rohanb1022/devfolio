function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

// Locomotive Scroll initialization
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("main"), // Target your main container for scroll effects
//   smooth: true, // Enables smooth scroll
//   getDirection: true // Optional, helps with directional scroll animations
// });

// Update the scroll whenever there's a resize event
window.addEventListener("resize", () => {
  scroll.update();
  });

// Add the locomotive scroll to any section that you want to apply smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  tl.from(".title span", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1, // Delay between each letter
    ease : "back.out(1.9)" , // Animation effect
  });
  
  tl.to(".section__pic-container1", {
    x: "-100vw", // Moves image to the left
    y: "-100vh", // Moves image to the top
    opacity: 0,
    scrollTrigger: {
      trigger: "#profile",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      scale: 1.1 // Smooth animation effect
    },
  });
  
  tl.to(".section__text", {
    x: "100vw", // Moves text to the right
    y: "-100vh", // Moves text to the top
    opacity: 0,
    scrollTrigger: {
      trigger: "#profile",
      start: "top top",
      end: "bottom top",
      scrub: 2,
      scale: 1.2 // Smooth animation effect
    },
  });
});


gsap.from(".logo", {
  duration: 2.4,
  y: -10,
  rotation: 45,
  scale: 0.5,
  ease: "elastic",
});

const logo = document.querySelector(".logo");

    logo.addEventListener("mouseenter", () => {
        const fullName = "Rohan Bhangale";
        logo.innerHTML = ""; // Clear existing text

        fullName.split("").forEach((letter, index) => {
            let span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter; // Non-breaking space
            span.style.display = "inline-block";
            span.style.opacity = "0";
            logo.appendChild(span);

            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.05,
                ease: "bounce.out"
            });
        });
    });

    logo.addEventListener("mouseleave", () => {
        const spans = document.querySelectorAll(".logo span");

        spans.forEach((span, index) => {
            gsap.to(span, {
                opacity: 0,
                y: 10,
                duration: 0.3,
                delay: index * 0.05,
                ease: "power2.in",
                onComplete: () => {
                    if (index === spans.length - 1) {
                        logo.textContent = "RB"; // Reset to initials
                    }
                }
            });
        });
    });


gsap.from(".nav-links li ", {
  duration: 3,
  y: -100,
  scale: 0.8,
  ease: "elastic",
  stagger : 0.1
})

const tl = gsap.timeline({ defaults: { duration: 1 } });



//document.addEventListener("DOMContentLoaded", () => {
  //   tl.from(".title span", {
  //     y: -100,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.1, // Delay between each letter
  //     ease: "back.out(1.7)", // Animation effect
  //   });
  // });

  tl.to(".section__pic-container1", {
    x: "-100vw", // Moves image to the left
    y: "-100vh", // Moves image to the top
    opacity: 0,
    scrollTrigger: {
      trigger: "#profile",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      scale : 1.1 // Smooth animation effect
    },
  });
  
  tl.to(".section__text", {
    x: "100vw", // Moves text to the right
    y: "-100vh", // Moves text to the top
    opacity: 0,
    scrollTrigger: {
      trigger: "#profile",
      start: "top top",
      end: "bottom top",
      scrub: 2,
      scale : 1.2 // Smooth animation effect
    },
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-containers .details-container", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Stagger the animation for each child
        scrollTrigger: {
            trigger: "#experience",
            start: "top 35%", // Animation starts when the section is 75% into the viewport
            toggleActions: "play none none reverse", // Play animation on scroll-in and reverse on scroll-out
        }
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-containers .education-details-container", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Stagger the animation for each child
        scrollTrigger: {
            trigger: "#about",
            start: "top 35%", // Animation starts when the section is 75% into the viewport
            toggleActions: "play none none reverse", // Play animation on scroll-in and reverse on scroll-out
        }
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-containers .projects-details-container", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Stagger the animation for each child
        scrollTrigger: {
            trigger: "#projects",
            start: "top 35%", // Animation starts when the section is 75% into the viewport
            toggleActions: "play none none reverse", // Play animation on scroll-in and reverse on scroll-out
        }
    });
});
