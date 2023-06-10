document.addEventListener("DOMContentLoaded", function() {
  const crossContainer = document.getElementById("crossContainer");
  const containerHeight = crossContainer.offsetHeight;
  const crossCount = Math.ceil(containerHeight / 20);

  for (let i = 0; i < crossCount; i++) {
    const cross = document.createElement("div");
    cross.className = "cross";
    cross.style.top = (i * 20) + "px";
    crossContainer.appendChild(cross);
  }

  const discordButton = document.getElementById("discordButton");

  discordButton.addEventListener("mouseover", function() {
    discordButton.style.transform = "scale(1.1)";
  });

  discordButton.addEventListener("mouseout", function() {
    discordButton.style.transform = "scale(1)";
  });

  discordButton.addEventListener("click", function() {
    window.location.href = "discord.html";
  });
  
});
