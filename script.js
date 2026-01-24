// 🔐 CHANGE YOUR PASSWORD HERE
const PASSWORD = "10-28-2025";

// Unlock website
function unlock() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("website").classList.remove("hidden");
    startHearts();
  } else {
    error.innerText = "Wrong password 💔 Try again";
  }
}

// Page navigation (single-page style)
function openPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

// Floating hearts animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 700);
}
