import { gsap } from 'gsap';

window.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector(
    ".container-images img:nth-child(1)"
  ) as HTMLImageElement;
  const img2 = document.querySelector(
    ".container-images img:nth-child(2)"
  ) as HTMLImageElement;
  const img3 = document.querySelector(
    ".container-images img:nth-child(3)"
  ) as HTMLImageElement;
  const btn = document.querySelector(".btn");

  gsap.to([img1, img2, img3], {
     scale: 1.5,
    y: 300,
    duration:3.5,
    delay: 2,
    stagger:{
      amount:0.35,
    },
    ease:"circ"
  });
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
      repeat: 2,
    });
  });
});
