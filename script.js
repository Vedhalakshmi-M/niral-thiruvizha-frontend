const backendUrl = "http://127.0.0.1:5000"; // Change if using a different server

// Add farmer data
function addFarmer() {
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const crop = document.getElementById("crop").value;

    fetch(`${backendUrl}/add_farmer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, crop })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Error:", error));
}

// Get weather data
function getWeather() {
    const location = document.getElementById("weatherLocation").value;

    fetch(`${backendUrl}/weather?location=${location}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weatherResult").innerText =
            `Temperature: ${data.main.temp}°C, Condition: ${data.weather[0].description}`;
    })
    .catch(error => console.error("Error:", error));
}

// Upload leaf image for analysis (To be implemented)
function analyzeLeaf() {
    alert("Leaf analysis feature coming soon!");
}
