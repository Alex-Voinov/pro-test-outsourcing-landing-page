<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"] ?? '';


    // Отправка электронной почты с использованием PHPMailer
    $mail = new PHPMailer(true);

    try {
        $to = "pro.test.studio2022@gmail.com";
        $subject = "Новая заявка с сайта";
        
        $mail->isSMTP();
        $mail->Host = 'mail.hosting.reg.ru'; // Замените на реальный SMTP-хост вашего хостинга
        $mail->SMTPAuth = true;
        $mail->Username = 'support@pro-test.studio'; // Замените на ваше имя пользователя SMTP
        $mail->Password = 'K.,bvsq1234'; // Замените на ваш пароль SMTP
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('support@pro-test.studio', 'Pro Test Studio');
        $mail->addAddress($to);

        $mail->isHTML(false);
        $mail->CharSet = 'UTF-8'; // Установка кодировки символов
        $mail->Encoding = 'base64'; // Установка метода кодировки для текстовых данных
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Сохранение логов в файл
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function ($str, $level) {
            file_put_contents('mail_log.txt', date('Y-m-d H:i:s') . " $level: $str", FILE_APPEND);
        };

        $mail->send();
        echo 'Form submitted successfully!';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
} else {
    echo 'Invalid request';
}
?>