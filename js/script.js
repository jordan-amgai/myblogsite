if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);
document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("gta-countdown");
  if (!countdown) return;

  // November 19, 2026 at midnight (local time)
  const target = new Date(2026, 10, 19, 0, 0, 0).getTime(); // month is 0-based: 10 = November

  const pad = (n) => String(n).padStart(2, "0");

  function update() {
    const diff = target - Date.now();

    if (diff <= 0) {
      countdown.classList.add("d-none");
      document.getElementById("cd-message").classList.remove("d-none");
      clearInterval(timer);
      return;
    }

    document.getElementById("cd-days").textContent = pad(Math.floor(diff / 86400000));
    document.getElementById("cd-hours").textContent = pad(Math.floor((diff / 3600000) % 24));
    document.getElementById("cd-mins").textContent = pad(Math.floor((diff / 60000) % 60));
    document.getElementById("cd-secs").textContent = pad(Math.floor((diff / 1000) % 60));
  }

  update();
  const timer = setInterval(update, 1000);
});
