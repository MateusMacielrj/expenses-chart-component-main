const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  bar.addEventListener("mouseenter", () => {
    const amount = bar.getAttribute("data-amount");
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerText = amount;
    bar.appendChild(tooltip);
  });

  bar.addEventListener("mouseleave", () => {
    const tooltip = bar.querySelector(".tooltip");
    if (tooltip) bar.removeChild(tooltip);
  });
});
