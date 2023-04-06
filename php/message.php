<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "6235496583:AAGd0WjGz5HQ6iMLfpsK3OQSt8TjQ3z9ufI";
$chat_id = "-614292046";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email' => $email,
  'Сообщение:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>