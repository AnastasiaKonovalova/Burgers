<?php

    $name = $_POST['user-name'];
    $tel = $_POST['user-tel'];
    $street = $_POST['street'];
    $building = $_POST['building'];
    $buildingIndex = $_POST['building-index'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $comment = $_POST['user-comment'];
    $pay = $_POST['pay'];

    $disturb = $_POST['nocall']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $tel . '</li>
            <li>Адрес: ' . $street . ', дом ' . $building . ', корпус ' . $buildingIndex . ', квартира ' . $flat . ', этаж ' . $floor . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    echo $mail_message;

    $headers = "From: Администратор сайта <silentium90@mail.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('silentium90@mail.ru', 'Заказ бургеры', $mail_message, $headers);

    // $data = [];

    if ($mail) {
        echo 'done';
        // $data['status'] = "OK";
        // $data['mes'] = "Письмо успешно отправлено";
    }else{
        echo 'error'
        // $data['status'] = "NO";
        // $data['mes'] = "На сервере произошла ошибка";
    };

    // echo json_encode($data);

?>