var toast = document.getElementById("toast");
var toastTimer = null;

function say(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
}


try {
  var room = localStorage.getItem("currentRoom");
  if (room) {
    document.getElementById("curRoom").textContent = "Room: " + room;
    document.getElementById("curStatus").textContent = "Status: Pending";
  }
} catch (e) {}

document.querySelectorAll(".stub").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    say("Processing...");
  });
});

var moreBtn = document.getElementById("moreBtn");
moreBtn.addEventListener("click", function () {
  var rows = document.querySelectorAll(".extra");
  var showing = !rows[0].hidden;
  rows.forEach(function (row) { row.hidden = showing; });
  moreBtn.textContent = showing ? "View More" : "View Less";
});