const animatedElements = document.querySelectorAll(".fadeIn, .fadeInLeft");

const observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        // console.log(entry.target, 'intersectiing');
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.25,
  }
);
animatedElements.forEach((element) => {
  observer.observe(element);
});
// console.log(observer.observe(fadeIn));
