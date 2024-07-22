<?php
include('conn.php');

$sql = "SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT 100";
$result = $conn->query($sql);

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

$conn->close();
?>
