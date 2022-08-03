let content = document.querySelectorAll(".home > p, .home > h1");



function writer(content, setTime = null){

	
	let valueContent = content.innerHTML;
	let arrayValue = valueContent.split("");

	let arrayLength = arrayValue.length;
	

	content.innerHTML = "";

	setTimeout(()=>{

		let writerInterval = setInterval(()=>{
 
			if(!arrayValue.length){

				content.classList.remove("after");
				clearInterval("writerInterval");
				return;
			}

			let char = arrayValue.shift();
			
			content.classList.add("after");

			content.innerHTML += char;

		}, 120);


	}, setTime);

	return (arrayLength * 120);

}


let timeOut1 =  writer(content[0]) ;
let timeOut2 = 	writer(content[1], timeOut1) ;
let timeOut3 =  writer(content[2], timeOut1 + timeOut2) ;
