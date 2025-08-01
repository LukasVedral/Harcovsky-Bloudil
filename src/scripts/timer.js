// Nastav cílové datum – 5. listopadu 2025, 00:00:00
const targetDate = new Date("2025-11-05T00:00:00");

// Funkce pro aktualizaci odpočtu
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return; // konec – datum už nastalo
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

//  console.log(`Zbývá: ${days} dní, ${hours} hodin, ${minutes} minut, ${seconds} sekund`);
  
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}


updateCountdown();
setInterval(updateCountdown, 1000);