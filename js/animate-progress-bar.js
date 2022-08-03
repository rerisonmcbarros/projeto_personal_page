let progressItens = document.querySelectorAll(".skills .progress");

function animateProgress(progressItens) {

	if(progressItens){

		progressItens.forEach((item)=>{

			let itemOffset = item.offsetTop;

			let pageOffset = window.pageYOffset + (window.innerHeight * 0.90);	

			

			if(pageOffset > itemOffset){

				let progressItem = item.innerHTML;

				item.style.width = `${progressItem}`;

				item.style.animation = "animateProgress ease-in-out forwards 1s";

			
			}else{
				
				item.style.width = "0%";

				item.style.animation = "";

			}

		});

	}
	

}

animateProgress(progressItens);	


//console.log(progressItens);