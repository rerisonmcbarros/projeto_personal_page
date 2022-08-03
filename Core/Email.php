<?php

namespace Core;

use  PHPMailer\PHPMailer\PHPMailer ;
use  PHPMailer\PHPMailer\Exception ;


class Email{
	
	/** @var array */
	private $data;

	/** @var Email */
	private $mail;

	/** @var string */
	private $message;


	public function __construct(){
		
		$this->mail = new PHPMailer(true);

		//$this->mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
   	 	$this->mail->isSMTP();                                             	//Enviar usando SMTP
    	$this->mail->Host       = 'smtp.gmail.com';                      	//Configura o servidor SMTP para enviar através de 
    	$this->mail->SMTPAuth   = true;                                    	//Ativar autenticação SMTP 
    	$this->mail->Username   = 'homepage.rerison@gmail.com';             //Nome de usuário SMTP 
    	$this->mail->Password   = 'cvnekohykhapzywk';                      	//Senha SMTP 
    	$this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            	//Ativar criptografia TLS implícita 
    	$this->mail->Port       = 465; 										//TCP port to connect to
    	$this->mail->Charset ="utf8";  										//Define charset
    	$this->mail->isHTML(true);											//Defina o formato do email para HTML
	}


	/** @param $subject string */
	/** @param $message string */
	/** @param $toEmail string */
	/** @param $toName string */
	/** @return Email */
	public function bootstrap($subject = "Home Page", $message, $toEmail = "rerisonbarros1997@gmail.com", $toName = "Rerison"): Email{

		$this->data = new \stdClass();

		$this->data->subject = $subject;
		$this->data->message = $message;
		$this->data->toEmail = $toEmail;
		$this->data->toName = $toName;

		return $this;
	}

	/** @param $fromName string */
	/** @param $fromEmail string */
	/** @return bool */
	public function send($fromEmail = "homepage.rerison@gmail.com", $fromName = "Home Page"){

		if(empty($this->data)){

			$this->message = "Verifique todos os dados!";

			return false;
		}

		if(!$this->isEmail($this->data->toEmail) ){

			$this->message = "O email do destinatário não é válido!";
			return false;
		}

		if(!$this->isEmail($fromEmail) ){

			$this->message = "O email do remetente não é válido!";
			return false;
		}

	
		try{

			$this->mail->Subject = $this->data->subject;
			$this->mail->addAddress($this->data->toEmail, $this->data->toName);
			$this->mail->setFrom($fromEmail, $fromName);
			$this->mail->Body    = $this->data->message;
    		$this->mail->AltBody = $this->data->message;
			$this->mail->send();

			$this->message = "Email enviado com sucesso!";
			return true;

		}catch(Exception $exception){

			$this->message = $exception->getMessage();

			return false;

		}

	}

	/** @param $email string */
	/** @return bool */
	public function isEmail($email){

		if(filter_var($email, FILTER_VALIDATE_EMAIL) ){

			return true;
		}else{

			return false;
		}

	}


	/** @return Email */
	public function mail(){

		return $this->mail;

	}
	/** @return string */
	public function message(){

		return $this->message;

	}


}


?>