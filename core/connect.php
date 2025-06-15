<?

$host = 'mysql-8.0';
$db = 'api-js';
$user = 'root';
$pass = '';

$dsn = "mysql:host=$host;dbname=$db";
$options = [

    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC 
];
    
$pdo = new PDO($dsn, $user, $pass, $options);