// Animation for the first element
gsap.to(".box1", {
  duration: 2,
  x: 200,
  scale: 1.5,
  backgroundColor: "#e74c3c",
  ease: "elastic",
  repeat: -1, // Repeat indefinitely
  yoyo: true, // Reverse animation on repeat
});

// Animation for the second element
gsap.fromTo(
  ".box2",
  {
    x: -200,
    opacity: 0,
  },
  {
    duration: 2,
    x: 0,
    opacity: 1,
    ease: "bounce",
  }
);

// Animation for the third element
gsap.fromTo(
  ".box3",
  {
    x: 200,
    opacity: 0,
  },
  {
    duration: 2,
    x: 0,
    opacity: 1,
    ease: "expo",
  }
);

// Hover effect for all boxes
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseover", () => {
    gsap.to(box, {
      duration: 0.5,
      scale: 1.2,
    });
  });

  box.addEventListener("mouseout", () => {
    gsap.to(box, {
      duration: 0.5,
      scale: 1,
    });
  });
});
