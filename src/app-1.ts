import { gsap } from 'gsap';

window.addEventListener("DOMContentLoaded", () => {
  const img2 = document.querySelector(
    ".container-images img:nth-child(1)"
  ) as HTMLImageElement;
  gsap.registerEffect({
    name: "crazyImage",
    effect: (targets: gsap.TweenTarget, config: gsap.TweenVars) =>
      gsap.to(targets, {
        duration: config.duration,
        y: 100,
        scale: 1.4,
        rotation: 360,
      }),
    default: {
      duration: 0.35,
    },
  });

  gsap.effects.crazyImage(img2);
});
