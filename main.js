// main.js
document.body.classList.add("fade-in");

document.querySelectorAll(".page-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});