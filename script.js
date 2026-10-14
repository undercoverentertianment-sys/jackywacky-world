document.getElementById("buyBtn").addEventListener("click", () => {
  const message = document.getElementById("message");

  // show the normal confirmation first
  message.textContent = "🎟️ Ticket purchased! Welcome to JackyWacky World...";

  // after a short delay, show the creepy warning
  setTimeout(() => {
	message.textContent = "Don't come any closer.";
  }, 1400);
});
