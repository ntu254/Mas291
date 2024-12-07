// Đợi cho DOM load xong
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effect cho các phần tử khi scroll
  const fadeInElements = document.querySelectorAll(".fade-in");

  function checkFade() {
    fadeInElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkFade);
  checkFade(); // Kiểm tra ngay khi trang load

  // Hiệu ứng hover cho các nút
  const buttons = document.querySelectorAll(".animated-button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.transition = "transform 0.3s ease";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });

  // Hiệu ứng typing cho tiêu đề
  const title = document.querySelector(".typing-title");
  if (title) {
    const text = title.textContent;
    title.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    typeWriter();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const tabContainer = document.querySelector(".tab-container");
  const tabContents = document.querySelectorAll(".tabcontent");
  const tabLinks = document.querySelectorAll(".tablink");

  menuToggle.addEventListener("click", function () {
    tabContainer.classList.toggle("open");
    tabContents.forEach((content) => content.classList.toggle("shifted"));
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener("click", function (event) {
    if (!tabContainer.contains(event.target) && event.target !== menuToggle) {
      tabContainer.classList.remove("open");
      tabContents.forEach((content) => content.classList.remove("shifted"));
    }
  });

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function () {
      tabContainer.classList.remove("open");
      tabContents.forEach((content) => content.classList.remove("shifted"));
    });
  });
});
