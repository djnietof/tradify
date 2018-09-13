function showModal() {
  document.getElementById('openModal').style.display = 'block';
}

function CloseModal() {
  document.getElementById('openModal').style.display = 'none';
}

function aniadirModal() {
	var eleDiv = document.getElementById('openModal');
	if (eleDiv == null) {
		var div = document.createElement("div");
		div.className = "modalDialog";
		div.id = "openModal";
		var div2 = document.createElement("div");
		var eleButton = document.createElement("button");
		eleButton.setAttribute('type', "button");
		eleButton.setAttribute('id', "closeModal");
		eleButton.setAttribute('onclick', "javascript:$('#openModal').css('display', 'none');");
		//$('#openModal').css('display', 'none');
		//var eleSpan = document.createElement("span");
		//eleSpan.setAttribute('class', "red");
		//var eleSpanText = document.createTextNode("X");
		var eleButtonText = document.createTextNode("X ");
		eleButton.appendChild(eleButtonText);
		//eleButton.appendChild(eleSpan);
		
		
		/*var eleA = document.createElement('a');
		var eleAText = document.createTextNode("X");
		eleA.setAttribute('href', "#");
		eleA.setAttribute('title', "Close");
		eleA.setAttribute('class', "close");
		eleA.setAttribute('onclick', "javascript:document.getElementById('openModal').style.display = 'none';");
		eleA.appendChild(eleAText);
		div2.appendChild(eleA);
		*/
		
		div2.appendChild(eleButton);
		var eleP = document.createElement('span');
		eleP.id = "openModalText";
		var elePText = document.createTextNode("");
		eleP.appendChild(elePText);
		
		div2.appendChild(eleP);
		
/*		//Boton altavoz
		var eleA2 = document.createElement("a");
		eleA2.setAttribute('href', "#");
		eleA2.setAttribute('class', "");
		eleA2.setAttribute('onclick', "javascript:document.getElementById('openModal').style.display = 'none';");
		//var eleSpan = document.createElement("span");
		//eleSpan.setAttribute('class', "red");
		//var eleSpanText = document.createTextNode("X");
		
		var eleImg = document.createElement("img");
		eleImg.setAttribute('src', browser.extension.getURL("icons/altavoz.png"));
		eleImg.setAttribute('alt', "");
		eleImg.setAttribute('height', "32");
		eleImg.setAttribute('width', "32");
		eleA2.appendChild(eleImg);
		div2.appendChild(eleA2);
		//Fin boton altavoz
*/	
		div.appendChild(div2);
		
		//divText = document.createTextNode("Este es un ejemplo de modal, creado gracias al poder de CSS3.");
		//div.appendChild(divText);
		//div.textContent = "Este es un ejemplo de modal, creado gracias al poder de CSS3.";
		//div.textContent = "<a href='#close' title='Close' class='close' onclick='javascript:CloseModal();'>X</a><h2>Mi modal</h2><p>Este es un ejemplo de modal, creado gracias al poder de CSS3.</p><p>Puedes hacer un montón de cosas aquí, como alertas o incluso crear un formulario de registro aquí mismo.</p>";
		document.body.appendChild(div);
		
		eleButton.addEventListener("click", function(){document.getElementById('openModal').style.display = 'none';});
	}
/*	var createA = document.createElement('a');
	var createAText = document.createTextNode(theCounter);
	createA.setAttribute('href', "http://google.com");
	createA.appendChild(createAText);
	getTheTableTag.appendChild(createA);
*/	
		
	showModal();
}

function aniadirTexto(texto) {
  document.getElementById('openModalText').innerHTML = texto;
}

browser.runtime.onMessage.addListener((message) => {
    if (message.command === "aniadir") {
      aniadirModal();
    } else if (message.command === "texto") {
	  aniadirTexto(message.beastURL);
	}
});