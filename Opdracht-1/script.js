// Initial animation for all elements
gsap.from("body *", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
});

// Hover and click effects for image cards
document.querySelectorAll(".card").forEach((card) => {
  const img = card.querySelector("img");
  const caption = card.querySelector("figcaption");

  card.addEventListener("mouseover", () => {
    gsap.to([img, caption], {
      duration: 0.5,
      scale: img ? 1.1 : undefined,
      opacity: caption ? 1 : undefined,
      y: caption ? 0 : undefined,
      boxShadow: img ? "0px 10px 20px rgba(0, 0, 0, 0.2)" : undefined,
    });
  });

  card.addEventListener("mouseout", () => {
    gsap.to([img, caption], {
      duration: 0.5,
      scale: img ? 1 : undefined,
      opacity: caption ? 0 : undefined,
      y: caption ? 20 : undefined,
      boxShadow: img ? "0px 0px 0px rgba(0, 0, 0, 0)" : undefined,
    });
  });

  card.addEventListener("click", () => {
    gsap.to(img, {
      duration: 0.5,
      rotation: 360,
      scale: 1,
      width: "100%",
      height: "200px",
    });
  });
});
