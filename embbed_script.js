(function() {
    // Creating the button
    const button = document.createElement('button');
    button.innerText = "Click to Fetch Data";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    document.body.appendChild(button);

    // Creating the pop-up form
    const popUpForm = document.createElement('div');
    popUpForm.style.position = 'fixed';
    popUpForm.style.top = '50%';
    popUpForm.style.left = '50%';
    popUpForm.style.transform = 'translate(-50%, -50%)';
    popUpForm.style.backgroundColor = 'white';
    popUpForm.style.padding = '20px';
    popUpForm.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    popUpForm.style.display = 'none';  // Initially hidden
    popUpForm.style.zIndex = '1000';
    
    // Adding a form inside the pop-up
    popUpForm.innerHTML = `
        <h3>Welcome! Please enter your details:</h3>
        <input type="text" id="name" placeholder="Enter your name" style="width: 100%; padding: 8px; margin-bottom: 10px;">
        <button id="submit" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none;">Submit</button>
        <button id="close" style="padding: 10px 20px; background-color: #f44336; color: white; border: none; margin-left: 10px;">Close</button>
    `;

    document.body.appendChild(popUpForm);

    // Show the pop-up when the button is clicked
    button.addEventListener('click', function() {
        popUpForm.style.display = 'block';
    });

    // Close the pop-up when the close button is clicked
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', function() {
        popUpForm.style.display = 'none';
    });

    // Handle form submission
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        if (name) {
            alert('Hello, ' + name + '!'); // Custom behavior after form submission
            popUpForm.style.display = 'none'; // Close the form after submission
        } else {
            alert('Please enter your name.');
        }
    });

    // Function to fetch data (if you still want this functionality)
    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);  // You can replace this with any functionality to use the data
            alert('Data fetched! Check console.');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
})();
