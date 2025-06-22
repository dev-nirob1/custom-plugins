const navbarAnimation = () => {
  const body = document.body;
  // console.log(body);
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0) {
      body.classList.remove("scroll-down", "scroll-up");
      return;
    }
    if (currentScroll > lastScroll) {
      body.classList.add("scroll-down");
      body.classList.remove("scroll-up");
    } else {
      body.classList.add("scroll-up");
      body.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
  });
};

const navbarToggle = () => {
  const navbar = document.querySelector(".navbar");
  const toggleMenu = document.querySelector(".hamburger");
  const nav_links = document.querySelector(".nav-links");
  // navbar toggle
  toggleMenu.addEventListener("click", () => {
    if (nav_links.classList.contains("active")) {
      nav_links.classList.remove("active");
    } else {
      nav_links.classList.add("active");
    }
  });
};

const modalToggle = () => {
  // modal toggle
  const modal = document.querySelector(".modal");
  const getCodeButton = document.querySelectorAll(".coupon-card button");
  const closeModal = document.querySelectorAll(".modal .close-btn");

  getCodeButton.forEach((open) => {
    open.addEventListener("click", () => {
      modal.style.display = "flex";
      // console.log("modal open ");
    });
  });

  closeModal.forEach((close) => {
    close.addEventListener("click", () => {
      modal.style.display = "none";
      // console.log("modal closed ");
    });
  });
};

const owlCarousel = () => {
  // DOM Element Selectors
  const cardList = document.getElementsByClassName("testimonial-card");
  const cardContainer = document.querySelector(".cards-container");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // card width including margin
  const cardWidth = cardList[0].offsetWidth + 32;
  let cardIndex = 0;

  // Next Button Click Handler
  nextBtn.addEventListener("click", () => {
    // calculation for clone
    const cloneIndex = cardIndex % cardList.length;

    if (cardIndex <= cardList.length - 1) {
      // Clone the card and append
      const lastCard = cardList[cloneIndex].cloneNode(true);
      cardContainer.appendChild(lastCard);

      // Scroll to next position
      cardContainer.scrollTo({
        left: cardWidth * (cardIndex + 1),
        behavior: "smooth",
      });
    }
    // Increment position counter
    cardIndex++;
  });

  // Previous Button Click Handler
  prevBtn.addEventListener("click", () => {
    // Only go back if not at first card
    if (cardIndex > 0) {
      // Decrement position counter
      cardIndex--;
      // Scroll to previous position
      cardContainer.scrollTo({
        left: cardWidth * cardIndex,
        behavior: "smooth",
      });
    }
  });
};
navbarAnimation();
navbarToggle();
modalToggle();
owlCarousel();
