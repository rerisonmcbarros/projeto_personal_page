<?php

namespace Controller;


/** class Page */
/** @package Controller */
class Page{

	public function home(){

		require_once __DIR__."/../home.php";

	}

	public function emailSend(){

			$emailComponent = new \Core\Email();


			if(isset($_POST['send'])){
				$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_STRIPPED);
				$message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRIPPED);

				if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)){

					$flashMessage =  "<div class='flash-message'>"."Preencha todos os dados corretamente!"."</div>";

				}else{

					$emailComponent->bootstrap(
					
						"Envio de Email via PHPMailer",
						$email."<br>".$message, 
						"rerisonbarros1997@gmail.com", "Rerison"
					);


					$emailComponent->send();

					$flashMessage = "<div class='flash-message'>".$emailComponent->message()."</div>";
				}	
			
			}

		require_once __DIR__."/../home.php";
	}


	
	public function error($error){

		echo "Error : {$error["error"]} <br>";

	}

}