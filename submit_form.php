<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Отправка данных на электронную почту
    $to = "workspaceoptimal@gmail.com";
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {

    // Перенаправление на страницу "спасибо"
        header("Location: thanks.html");
        exit;
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request";
}
?>
