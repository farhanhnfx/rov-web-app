<?php
include('conn.php');
$input = $_GET('input');

$sql = "UPDATE current_control SET control = '$input' WHERE id = 1";

if ($conn->query($sql) === TRUE) {
    echo "Joystick input succesfully sent";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>