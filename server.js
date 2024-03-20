const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware для разбора JSON и URL-encoded данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware для разрешения CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Замените на вашу страницу
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Разрешить метод OPTIONS
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Обработка POST запроса от формы
app.post('/submit-form', (req, res) => {
    // Получаем данные из запроса
    const { titleMessage, textMessage } = req.body;


    // Создаем транспорт для отправки писем
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '5708691@gmail.com', // Ваша электронная почта
            pass: '' // Пароль приложения
        }
    });

    // Настройки письма
    let mailOptions = {
        from: '5708691@gmail.com', // Отправитель
        to: 'VoinovAlex1900@yandex.ru', // Получатель
        subject: titleMessage, // Тема письма
        text: textMessage // Текст письма
    };

    // Отправка письма
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' }); // Отправляем объект JSON с сообщением об ошибке
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' }); // Отправляем объект JSON с сообщением об успешной отправке
        }
    });
});

// Добавление обработчика для опции (preflight) запросов
app.options('/submit-form', (req, res) => {
    res.status(200).send('OK');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
