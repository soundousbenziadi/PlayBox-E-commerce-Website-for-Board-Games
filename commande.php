<?php
session_start();
if (isset($_SESSION["First_name"])) {
    $link = mysqli_connect('localhost', 'root', 'password', 'base_client');
    $Client_id = $_SESSION["Cli_id"];
    $seller = $_POST["seller"];
    $price = $_POST['price'];
    $ref = $_POST["ref"];
    $language = $_POST["language"];
    $quantity = $_POST["quantity"];
    $query = "INSERT INTO commande_produit(Vendeur_prod,Prix_prod,Ref_prod,Prod_lang,Qant_prod,Id_client)
    VALUES ('$seller','$price','$ref','$language','$quantity','$Client_id');";
    mysqli_query($link, $query);
    if ($query) {
        echo "<p style='color:green'>Order placed successfully</p>";
        echo ("<p style='font-size:20px;color:purple;'>Back to <a href='index.html'>Home</a></p><br>");
    } else {
        echo "<p style='color:red'>Order failed</p>";
    }
    mysqli_close($link);
} else {
    echo " <p>you have to login first <a href='login.html'>login.html</a> </p>";
}
