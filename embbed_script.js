(function () {
    // Create the button element
    var button = document.createElement("button");
    button.innerText = "Click Me";
    
    // Style the button
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    
    // Button click event
    button.addEventListener("click", function () {
        alert("Welcome to this new skill");
    });
    
    // Append button to body
    document.body.appendChild(button);
})();
