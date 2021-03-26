<?php

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $emailto = "nickylim.p@gmail.com";
    $subject = "Contact Form Submission nicklimmm.github.io";
    $headers = "From: ".$email;
    $text = "You have received an e-mail from ".$name.".\r\n".$message;

    mail($emailto, $subject, $text, $headers);
    header("Location: index.html?mailsend");
}

>