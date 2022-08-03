let mobile = document.querySelector(".mobile-menu");
let nav = document.querySelector("nav");

let bars = document.querySelectorAll(".mobile-menu > div");

function transformMenu(){

	bars[0].classList.toggle("transform-bar1");
	bars[1].classList.toggle("transform-bar2");
	bars[2].classList.toggle("transform-bar3");
}



mobile.addEventListener("click", ()=>{

	if(nav.classList.contains("open-menu")){

		nav.classList.remove("open-menu");
		nav.classList.add("close-menu");

	}else{

		if(nav.classList.contains("close-menu")){
			nav.classList.remove("close-menu");
		}

		nav.classList.add("open-menu");	

	}

	transformMenu();
});

