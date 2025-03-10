<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html"); // Redirect to login if not logged in
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
        <p>This is your dashboard.</p>
        <a href="logout.php">Logout</a>
    </div>
    <div class="dashboard">
    <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
    <p>This is your dashboard.</p>
    <div class="dashboardLinks">
        <a href="profile.php">Profile</a>
        <a href="orders.php">Orders</a>
        <a href="settings.php">Settings</a>
    </div>
    <a href="logout.php">Logout</a>
</div>
</body>
</html>