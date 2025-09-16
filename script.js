const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", function() {
    alert("Challenge Accepted! Your background color will change.");
    function getRandomHexColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }
    document.body.style.backgroundColor = getRandomHexColor();
});
