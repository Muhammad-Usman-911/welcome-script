// embbed_script.js

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

    // Function to fetch data when the button is clicked
    button.addEventListener('click', function() {
        fetchData();
    });

    // Function to get data from an API or any other source
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
