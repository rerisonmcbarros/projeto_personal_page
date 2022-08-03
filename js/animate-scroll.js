let animateItens = document.querySelectorAll("[animate-block]");

let animateItensSkills = document.querySelectorAll(".skills .soft-skills, .skills .hard-skills");

//console.log(animateItensSkills);


function animateBlock(animateItens){

	animateItens.forEach((item)=>{

		let itemOffset = item.offsetTop;

		let pageOffset = window.pageYOffset + (window.innerHeight * 0.90);	


		if(pageOffset > itemOffset){

			item.classList.add("animate-content");

		}else{

			item.classList.remove("animate-content");

		}
		

	});

}

animateBlock(animateItens);

