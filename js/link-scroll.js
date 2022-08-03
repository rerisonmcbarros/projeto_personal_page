let menuItens = document.querySelectorAll(".menu  a[href^='#']");


menuItens.forEach((item)=>{

	item.addEventListener("click", (event)=>{

		scrollToIdOnClick(event);

	});

});



function scrollToIdOnClick(event){
	//variavel do script mobile-menu.js
	nav.classList.remove("open-menu");

	//função do script mobile-menu.js
	transformMenu();

	event.preventDefault();

	let element = event.target;
	let id = element.getAttribute("href");

	let section = document.querySelector(id);

	let offset = section.offsetTop;

	window.scroll(0,offset);

}

