// === Scroll ke atas (Back to Top Button) ===
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "⬆️";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}


// === Pop-up sambutan saat pertama kali buka ===
window.addEventListener("load", () => {
  alert("Selamat Datang di Website Kebun Binatang Nusantara 🐾");
});

// === Highlight menu navbar saat diklik ===
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
