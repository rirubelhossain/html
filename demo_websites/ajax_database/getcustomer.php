<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ajax_db";
// Create connection
//$conn = new mysqli($servername, $username, $password);

// Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";


// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

$sql = "SELECT customername, customeraddress, city, phone FROM customers WHERE customername = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cname, $address,$city, $phone);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>Customeraddress</th>";
echo "<td>" . $address . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>phone</th>";
echo "<td>" . $phone . "</td>";
echo "</tr>";
echo "</table>";
?>    

</body>
</html>





