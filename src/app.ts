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
  const title = document.querySelector(".title");
  const txt = document.querySelector(".txt");
  const TL = gsap.timeline();
  TL.to(img1, {
    y: 0,
    autoAlpha: 1,
  })
    .to(img2, {
      y: 0,
      autoAlpha: 1,
    })
    .to(img3, {
      y: 0,
      autoAlpha: 1,
    })
    .to(title, {
      y: 0,
      autoAlpha: 1,
    })
    .to(txt, {
      y: 0,
      autoAlpha: 1,
    });
});
