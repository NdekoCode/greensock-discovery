import { gsap } from 'gsap';

window.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector(".container-images img:nth-child(1)") as HTMLImageElement;
  const img2 = document.querySelector(".container-images img:nth-child(2)")  as HTMLImageElement;
  const btn = document.querySelector(".btn");

  btn?.addEventListener("click", () => {
    gsap.fromTo(
      img1,
      {
        opacity: 0,
        duration: 3,
      },
      {
        x: 100,
        y: 100,
        opacity: 1,
        scale: 1.5,
      }
    );
    gsap.to(img2, {
      y: 100,
      delay: 2,
    });
  });
});
