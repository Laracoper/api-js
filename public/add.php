<?

require '../core/connect.php';

$serv = $_SERVER['REQUEST_TIME'];
$agent = $_SERVER['HTTP_USER_AGENT'];
$s= $_SERVER['SERVER_ADDR'];
$v= $_SERVER['REMOTE_ADDR'];

$arr = [
    [
        "name" => "alex",
        "age" => 88
    ],
    [
        "name" => "lena",
        "age" => 44
    ]
];
if ($data = json_decode(file_get_contents('php://input'), true)) {
    http_response_code(220);
    header('Content-Type: application/json');

    print json_encode(['mess' => 'data ok', 'aray' => $arr, 'error' => 'false','server_time'=>$serv,'user_agent'=>$agent,'s'=>$s,'v'=>$v]);
}else{
     print json_encode(['mess' => 'not data','error' => 'true']);
      http_response_code(404);
    header('Content-Type: application/json');
}

// print_r($data) ;
