import { gsap } from 'gsap';

window.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector(
    ".container-images img:nth-child(1"
  ) as HTMLImageElement;
  console.log(img1);
  console.log(gsap);
  gsap.to(img1, { x: 100 });
});
