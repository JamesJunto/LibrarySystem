<?php
header('Access-Control-Allow-Origin: http://localhost:5179');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); 
    exit;
}

include "connection.php";

$data = json_decode(file_get_contents("php://input"), true);
$title = $data['title'];
$author = $data['author'];
$year = $data['year'];
$genre = $data['genre'];

$sql = "INSERT INTO books (title, author, year, genre) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

$stmt->bind_param("ssis", $title, $author, $year, $genre);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Book added successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to add book"]);
}

$stmt->close();
$conn->close();
