<?php

$host = 'localhost';
$dbname = 'gtdesmpu_neumak';
$username = 'gtdesmpu_neumak_sql_admin';
$password = 'sk!GcuyS4B.RB_q';

class formulario {
    public $nombre;
    public $correo;
    public $telefono;
    public $interes;
    const INFORMACION_GENERAL = 1;
    const FRENOS = 2;
    const NEUMATICOS = 3;
    const EMBRAGUES = 4;
    public $mensaje;

    //const dict_interes = [
        
    //]
}


// index.php in your backend folder
header('Access-Control-Allow-Origin: neumakrepuestos.cl'); // Allow Vite frontend
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Allow specific methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow headers

// Your PHP logic...
//header('Content-Type: application/json'); // Response as JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e) {
    }
    header('Content-Type: application/json');
    error_log("test\n", 3, "debug.log");
    error_log(print_r($_POST, true)."\n", 3, 'debug.log');
    // Get form data
    $nombre = $_POST['nombre'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $interes = $_POST['interes'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    try {
        $stmt = $pdo->prepare("
        INSERT INTO formulario 
            (nombre_completo, 
            correo_electronico,
            telefono,
            interes,
            mensaje) VALUES (
            :nombre_completo, 
            :correo_electronico,
            :telefono,
            :interes,
            :mensaje)
        ");
        $stmt->execute([
            'nombre_completo' => $nombre,
            'correo_electronico' => $correo,
            'telefono' => $telefono,
            'interes' => $interes,
            'mensaje' => $mensaje,
        ]);
        error_log("Data inserted successfully\n", 3, "debug.log");
        header('Content-Type: application/json'); // Ensure JSON content type
        http_response_code(200);  
        try {
            $rc = sendMail($nombre, $correo, $telefono, $interes, $mensaje);
            if($rc == 0) {
                echo json_encode(['success' => 'Message sent successfully']);
                error_log("success", 3, 'debug.log');
            }else {
                http_response_code(500);  
                echo json_encode(['error' => 'Message not sent']);
                error_log("Error: al enviar correo", 3, 'debug.log');
            }
        }catch(Error $e) {
            error_log(print_r($e->getMessage()));
        }
    } catch (PDOException $e) {
        http_response_code(500);  
        echo json_encode(['error' => 'Message not sent'.print_r($e->getMessage())]);
        error_log("Error\n", 3, "debug.log");
        error_log(print_r($e->getMessage(), true), 3, "debug.log");
        echo "Error: " . $e->getMessage();
    }
} else {
    readfile("index.html");
}

function sendMail($nombre, $correo, $telefono, $interes, $mensaje) {
    // Basic validation (you can expand this)
    if (empty($nombre) || empty($nombre) || empty($nombre)) {
        echo json_encode(['error' => 'Please fill in all required fields.']);
        error_log("error campos vacios", 3, "debug.log");
        exit;
    }
    error_log($nombre."\n", 3, "debug.log");
    // Sanitize and Validate the inputs

    // Sanitize email (remove any unwanted characters) and validate
    $correo = filter_var(trim($correo), FILTER_SANITIZE_EMAIL);
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        error_log("correo\n", 3, "debug.log");
        return 1;
    }

    //Sanitize name (remove extra spaces and special characters)
    $nombre = trim($nombre);
    $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);

    // Sanitize phone number (keep only numbers, maybe allow spaces or hyphens)
    $telefono = preg_replace('/[^0-9+\s-]/', '', $telefono); // Remove anything that's not a number, space, or hyphen

    // Sanitize interest (filter for expected options or sanitize the input string)
    $interes = filter_var(trim($interes), FILTER_SANITIZE_STRING);

    // Sanitize message (remove HTML tags and special characters)
    $mensaje = strip_tags($mensaje); // Remove HTML tags
    $mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8'); // Convert special characters to HTML entities

    //At this point, the inputs are sanitized and validated.

    //Send email (example using PHP's mail function)
    $to = $correo;
    $subject = "Neumak se pondra en contacto $nombre";
    $body = "Estimado $nombre\n
        Se recibieron sus datos y alguien se contactara con usted a la brevedad\n";
    $headers = "From: no-reply@neumakrepuestos.cl\r\nReply-To: ventas@neumakrepuestos.cl";

    // You can use mail() or PHPMailer if needed
    if (!mail($to, $subject, $body, $headers)) {
        error_log("enviar correo1\n", 3, "debug.log");
        return 1;
    } 
    $to = "ventas@neumakrepuestos.cl";
    $subject = "Datos del cliente";
    $body = "
        Datos:\n
        Nombre: $nombre\n
        Correo: $correo\n
        Phone: $telefono\n
        Interes: $interes\n\n
        Mensaje: $mensaje";
    $headers = "From: no-reply@neumakrepuestos.cl\r";


    // You can use mail() or PHPMailer if needed
    if (mail($to, $subject, $body, $headers)) {
        return 0;
    } else {
        error_log("enviar correo2\n", 3, "debug.log");
        return 1;
    }
    error_log("what is this\n", 3, "debug.log");

}