document.addEventListener("DOMContentLoaded", function () {

    const devElement = document.querySelector(".dev");
    if (devElement) {
        devElement.textContent = "Hello from JavaScript!";
    }

    const button = document.createElement("button");
    button.textContent = "Click Me!";
    button.style.marginTop = "20px";
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        alert("Button clicked!");
    });

    console.log("Script successfully loaded and executed.");
});