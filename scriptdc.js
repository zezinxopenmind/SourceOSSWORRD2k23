document.addEventListener("DOMContentLoaded", function() {
  const discordButton = document.getElementById("discordButton");
  const confettiContainer = document.querySelector(".confetti-container");

  discordButton.addEventListener("click", function() {
    // Remove existing confetti elements
    while (confettiContainer.firstChild) {
      confettiContainer.removeChild(confettiContainer.firstChild);
    }

    // Generate confetti elements
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confettiContainer.appendChild(confetti);
    }
  });
});
