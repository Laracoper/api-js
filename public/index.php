<?
require '../core/connect.php';
require '../core/func.php';

// dump($_SERVER);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="container">
        <div class="post">
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos atque repellendus.</p>
            <div class="btn">0</div>
        </div>
        <div class="qr">
            <img src="img/2025061521056.svg" alt="qr">
        </div>

        <div class="post2">
            <div class="btn1">+</div>
            <div class="num">0</div>
            <div class="btn2">-</div>
        </div>

        <div class="post3">
            <h4>title</h4>
            <!-- <div class="like">получить данные</div> -->
            <button class="like">получить данные</button>
            <div class="get"></div>
        </div>
    </div>
    <script src="js/main.js"></script>
</body>

</html>