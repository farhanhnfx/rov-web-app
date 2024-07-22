<?php
include('conn.php');

$temperature = $_GET['temperature'];
$ph = $_GET['ph'];
$turbidity = $_GET['turbidity'];
$ultrasonic1 = $_GET['ultrasonic1'];
$ultrasonic2 = $_GET['ultrasonic2'];
$tds = $_GET['tds'];
$pressure = $_GET['pressure'];
$gps_lat = $_GET['gps_lat'];
$gps_lon = $_GET['gps_lon'];

$sql = "INSERT INTO sensor_data (temperature, ph, turbidity, ultrasonic1, ultrasonic2, tds, pressure, gps_lat, gps_lon)
VALUES ('$temperature', '$ph', '$turbidity', '$ultrasonic1', '$ultrasonic2', '$tds', '$pressure', '$gps_lat', '$gps_lon')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
