<?php
require_once "../Connection.php";
require("../library/phpmailer/class.phpmailer.php");
require("../library/phpmailer/class.smtp.php");

class EmailsController
{
    private $db;

    public function __construct()
    {
        $this->db = new Connection();
    }

    public function contactEmail($data)
    {

        // $jsonFront = json_decode(file_get_contents('php://input'), true);
        // $id = $_POST['id'] ?? '';
        $email = $_POST['email'] ?? '';

        //CONFIGURACION DE PHPMailer
        $mail = new PHPMailer;
        $mail->IsSMTP();
        $mail->SMTPDebug = 0; //HABILITA LA INFORMACION DE DEPURACION SMTP
        $mail->SMTPAuth = true; //HABILITAR LA AUTENTICACIÓN SMTP
        $mail->Host = "c2751128.ferozo.com"; //ESTABLECE SERVIDOR SMTP
        $mail->Username = "consultas@riosdelnorte.com.ar"; //USER
        $mail->Password = "/6Ys/2M0"; //PASSWORD
        $mail->Port = 465; //PUERTO SMTP
        $mail->SMTPSecure = 'ssl';
        $mail->IsHTML(true);
        $mail->CharSet = "utf-8";

        //EMAIL DE LA PERSONA QUE EMITE LA CONSULTA DESDE LA WEB
        $mail->setFrom($email);

        //EMAIL DONDE SERÁN ENVIADOS LOS DATOS DEL FORMULARIO.
        $mail->addAddress('consultas@riosdelnorte.com.ar');

        //ASUNTO CORREO
        $mail->Subject = 'Nuevo mensaje de contacto';

        if ($id === 'consulta') {
            $nombre = $_POST['name_surname'] ?? '';
            $mensaje = $_POST['messaje'] ?? '';

            $message = '<div>';
            $message .= '<h2>Nuevo mensaje de contacto</h2>';
            $message .= '<p><strong>Nombre: </strong> ' . $nombre . '</p>';
            $message .= '<p><strong>Email: </strong> ' . $email . '</p>';
            $message .= '<p><strong>Mensaje: </strong> ' . $mensaje  . '</p>';
            $message .= '</div>';
        } else {
            $nombre = $_POST['name_surname'] ?? '';
            $phone = $_POST['phone'] ?? '';
            $mensaje = $_POST['messaje'] ?? '';

            $mail->addAttachment($cv);

            $message = '<div>';
            $message .= '<h2>Nuevo mensaje de contacto</h2>';
            $message .= '<hr>';
            $message .= '<p><strong>Nombre: </strong> ' . $nombre . '</p>';
            $message .= '<p><strong>Email: </strong> ' . $email  . '</p>';
            $message .= '<p><strong>Teléfono: </strong> ' . $phone  . '</p>';
            $message .= '<p><strong>Mensaje adjunto: </strong> ' . $mensaje  . '</p>';
            $message .= '</div>';
        }

        $mail->Body = $message;

        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        if ($mail->send()) {
            header("HTTP/1.1 200 OK");
        } else {
            header("HTTP/1.1 404 Not Found");
        }
    }
}
