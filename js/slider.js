
let parentNode = document.querySelector(".slide");
let childElementsCount = parentNode.childElementCount;
let childrenNodes = document.querySelectorAll(".slide img");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

let slideInterval;

next.addEventListener("click",()=>{

	if(parentNode.hasChildNodes()){


		firstChild = parentNode.children[0];

		//console.log(imageItens.children[0]);

		parentNode.removeChild(parentNode.children[0]);

		parentNode.appendChild(firstChild);

		clearInterval(slideInterval);

	}

})



previous.addEventListener("click",()=>{

	if(parentNode.hasChildNodes()){

		lastChild = parentNode.children[childElementsCount - 1];

		//console.log(lastChild);

		//console.log(parentNode.children[0]);

		parentNode.removeChild(parentNode.children[childElementsCount - 1]);

		parentNode.insertBefore(lastChild, parentNode.children[0]);

		clearInterval(slideInterval);


	}
	
})



function interval(){

	slideInterval = setInterval(()=>{

		if(parentNode.hasChildNodes()){


			firstChild = parentNode.children[0];

			//console.log(imageItens.children[0]);

			parentNode.removeChild(parentNode.children[0]);

			parentNode.appendChild(firstChild);

		}

	}, 3000);

}

interval();



//console.log(imageItens, imageItens[0], imageItens[1], imageItens[2]);

