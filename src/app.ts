import { gsap } from 'gsap';

window.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector(
    ".container-images img:nth-child(1"
  ) as HTMLImageElement;
  const img2 = document.querySelector(
    ".container-images img:nth-child(2)"
  ) as HTMLImageElement;
  console.log(img1);
  console.log(gsap);
  gsap.to(img1, { x: 100, y: 50, z: 40, scale: 2, duration: 2 });
  gsap.to(img2, { color: "green", backgroundColor: "yellow", duration: 1 });
});
