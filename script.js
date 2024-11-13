document.addEventListener('DOMContentLoaded', generateJoke);

function generateJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); // Parse the JSON response
            const joke = response.value; // Extract the joke
            document.getElementById('joke').innerHTML = joke; // Display the joke
        } else {
            document.getElementById('joke').innerHTML = 'Oops, something went wrong. Try again!'; // Error message
        }
    };
  
    xhr.onerror = function() {
        document.getElementById('joke').innerHTML = 'Failed to load joke. Check your connection.';
    };

    xhr.send(); // Send the request
}

// Add event listener to the button to fetch a new joke when clicked
document.getElementById('new-joke').addEventListener('click', generateJoke);
