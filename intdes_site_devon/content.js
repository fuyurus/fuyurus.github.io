document.querySelectorAll(".robot-part").forEach((part) => {
    part.addEventListener("mouseover", function () {
        const infoBox = document.getElementById("infoBox");
        infoBox.textContent = this.getAttribute("data-info");
    });

    part.addEventListener("mouseleave", function () {
        document.getElementById("infoBox").textContent = "Hover over a robot part to see details!";
    });
});
