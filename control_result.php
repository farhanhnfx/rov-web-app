<?php
include('conn.php');

$sql = "SELECT control FROM current_control WHERE id=1";
$res = $conn->query($sql);

if ($res->num_rows > 0) {
    // Fetch the data
    $row = $res->fetch_assoc();
    $control = $row['control'];
    header('Content-type: application/json');
    echo json_encode($row);
} else {
    echo "No records found.";
}

$conn->close();
?>
