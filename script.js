var popup = document.getElementById("popup");
var errorBox = document.getElementById("error");
var sumName = document.getElementById("sumName");
var checkIn = document.getElementById("checkIn");
var checkOut = document.getElementById("checkOut");
var chosen = null;

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
  popup.hidden = true;
}

document.querySelectorAll(".book").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".room").forEach(function (r) { r.classList.remove("selected"); });
    chosen = btn.closest(".room");
    chosen.classList.add("selected");
    sumName.textContent = chosen.getAttribute("data-room");
    errorBox.hidden = true;
  });
});


document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
});
document.getElementById("confirmBtn").addEventListener("click", function () {
  if (!chosen) { showError("Please choose a room with Book Now."); return; }
  if (!checkIn.value || !checkOut.value) { showError("Please select both check-in and check-out dates."); return; }
  if (checkOut.value <= checkIn.value) { showError("Check-out date must be after the check-in date."); return; }
  errorBox.hidden = true;
  try { localStorage.setItem("currentRoom", chosen.getAttribute("data-room")); } catch (e) {}
  popup.hidden = false;
});


document.getElementById("backBtn").addEventListener("click", function () {
  window.location.href = "dashboard.html";
});

document.querySelectorAll(".rc").forEach(function (a) {
  a.addEventListener("click", function (e) { e.preventDefault(); });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") { popup.hidden = true; }
});