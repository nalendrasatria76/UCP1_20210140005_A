// Mengatur salam, tanggal, dan jam sesuai waktu terkini
function updateDateTime() {
  var today = new Date();
  var hour = today.getHours();
  var greeting = "";

  if (hour < 12) {
    greeting = "Selamat Pagi";
  } else if (hour < 18) {
    greeting = "Selamat Siang";
  } else {
    greeting = "Selamat Malam";
  }

  document.querySelector(".greeting").textContent = greeting;
  document.querySelector("#date").textContent = today.toDateString();
  document.querySelector("#time").textContent = today.toLocaleTimeString();
}

// Memulai interval pembaruan waktu
setInterval(updateDateTime, 1000);

// Memanggil fungsi pembaruan waktu saat halaman dimuat
updateDateTime();
