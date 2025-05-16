<?php
$link = mysqli_connect('localhost', 'root', 'password', 'base_client');
$email = $_POST['email'];
$password = $_POST['user-password'];
$result = mysqli_query($link, "SELECT * FROM iclient WHERE Mail_Clt='$email'AND Mot_Clt='$password'");
if (mysqli_num_rows($result) > 0) {
    $ligne = mysqli_fetch_row($result);
    echo ("<p style='font-size:20px;color:green;'>Good morning $ligne[1] $ligne[2]</p><br>");
    echo ("<p style='font-size:20px;color:purple;'>Back to <a href='index.html'>Home</a> and place an order </p><br>");
    session_start();
    $_SESSION["Cli_id"] = $ligne[0];
    $_SESSION["Last_name"] = $ligne[1];
    $_SESSION["First_name"] = $ligne[2];
} else {
    echo ("<p style='font-size:20px;color:red;'>Incorrect Email and/or password  </p>");
}
mysqli_close($link);
