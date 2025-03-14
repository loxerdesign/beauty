// تأثيرات GSAP
gsap.from(".banner", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
});

gsap.from(".logo", {
    duration: 1.5,
    scale: 0,
    rotation: 360,
    ease: "elastic.out(1, 0.5)",
    delay: 0.5,
});

gsap.from(".profile", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1,
});

gsap.from(".links .link", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    delay: 1.5,
});