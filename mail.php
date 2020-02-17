
<?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "creasedigital7@gmail.com";
$subject = "Contact Form Submission Post";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: http://musicqix.netlify.com/mail-sent.html');
?>