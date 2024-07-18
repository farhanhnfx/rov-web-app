// Function to update the statistics on the webpage
function updateStats() {
    fetch('http://localhost:3000/api/stats')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('phValue').textContent = data.pH.toFixed(1);
            document.getElementById('temperatureValue').textContent = data.temperature.toFixed(1) + '°C';
            document.getElementById('turbidityValue').textContent = data.turbidity.toFixed(1) + ' NTU';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to initialize the webcam feed
function initializeWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const video = document.getElementById('webcam');
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) {
            console.error('Error accessing webcam: ', err);
        });
}

// Initialize the webcam and update stats periodically
document.addEventListener('DOMContentLoaded', function () {
    initializeWebcam();
    updateStats();
    setInterval(updateStats, 2000); // Update every 5 seconds (adjust as needed)
});
