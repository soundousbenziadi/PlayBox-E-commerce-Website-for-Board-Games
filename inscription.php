<?php
$link = mysqli_connect('localhost', 'root', 'password', 'base_client');
$firstName = $_POST['firstName'];
$familyName = $_POST['familyName'];
$age = $_POST['age'];
$wilaya = $_POST['wilaya'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$adresse = $_POST['adresse'];
$password = $_POST['password'];
$gender = $_POST['gender'];
$query = "INSERT INTO iclient (No_Clt, Pno_Clt, Age_Clt, Wi_Clt, Tel_Clt, Mail_Clt, Adr_Clt, Mot_Clt, Sexe_Clt) 
          VALUES ('$familyName', '$firstName', '$age', '$wilaya', '$phoneNumber', '$email', '$adresse', '$password', '$gender')";
$result = mysqli_query($link, $query);
if ($result) {
    echo "<p style='font-size:20px; color: green;'>Registration successful.<br> Good morning {$firstName} {$familyName}.</p>";
    echo ("<p style='font-size:20px;color:purple;'><a href='login.html'>Login</a></p><br>");
} else {
    echo "<p style='font-size:20px; color: red;'>Registration failed: " . mysqli_error($link) . "</p>";
}

mysqli_close($link);
