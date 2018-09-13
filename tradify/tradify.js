//<script src="./lib/jquery-2.0.3.min.js"></script>

browser.contextMenus.create({
    id: "translate-selection",
    title: "Translate selection",
    contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translate-selection") {
//		console.log("Text translated: " + texto);
		browser.tabs.insertCSS({file: "ventana.css"});
		browser.tabs.executeScript({file: "ventana.js"});

		// Examples: text and HTML to be copied.
        const text = info.selectionText;
		console.log("BG: " + text);
        // Always HTML-escape external input to avoid XSS.
        const safeUrl = escapeHTML(info.selectionText);
        const html = `This is HTML: <a href="${safeUrl}">${safeUrl}</a>`;
		

		console.log("Text to translate: " + text);
		var data = "texto=" + text;
		var texto = "";
		$.ajax({
			url:"http://virtualtraining.esy.es/index.php",
			type:"GET",
			data:data,
			crossDomain: true,
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			success: function(resultado, textostatus) {			
				const gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
				gettingActiveTab.then((tabs) => {
					browser.tabs.sendMessage(tabs[0].id, {command: "aniadir", beastURL: "url"});
				});

				//texto = resultado.substring(resultado.indexOf("=")+1)
				texto = unescape(resultado);
				console.log(texto);
				const gettingActiveTab2 = browser.tabs.query({active: true, currentWindow: true});
				gettingActiveTab2.then((tabs) => {
					browser.tabs.sendMessage(tabs[0].id, {command: "texto", beastURL: texto});
				});
		    }
		});
	
		

/*		var div = document.createElement("div");
		div.className = "modalDialog";
		div.id = "openModal";
		document.body.appendChild(div);
		
		//var node = $("</div>"); 
		//node.addClass("modalDialog");
		//node.attr("id", "openModal");
		showModal();
		//node.text("Your favorite color is now " + data.color);
		//<div id="openModal" class="modalDialog">
*/

/*      <div>
        <a href="#close" title="Close" class="close" onclick="javascript:CloseModal();">X</a>
        <h2>Mi modal</h2>
        <p>Este es un ejemplo de modal, creado gracias al poder de CSS3.</p>
        <p>Puedes hacer un montón de cosas aquí, como alertas o incluso crear un formulario de registro aquí mismo.</p>
      </div>
    </div>
*/	
			
        // The example will show how data can be copied, but since background
        // pages cannot directly write to the clipboard, we will run a content
        // script that copies the actual content.

        // clipboard-helper.js defines function copyToClipboard.
        /*const code = "copyToClipboard(" +
            JSON.stringify(text) + "," +
            JSON.stringify(html) + ");";

        browser.tabs.executeScript({
            code: "typeof copyToClipboard === 'function';",
        }).then((results) => {
            // The content script's last expression will be true if the function
            // has been defined. If this is not the case, then we need to run
            // clipboard-helper.js to define function copyToClipboard.
            if (!results || results[0] !== true) {
                return browser.tabs.executeScript(tab.id, {
                    file: "clipboard-helper.js",
                });
            }
        }).then(() => {
            return browser.tabs.executeScript(tab.id, {
                code,
            });
        }).catch((error) => {
            // This could happen if the extension is not allowed to run code in
            // the page, for example if the tab is a privileged page.
            console.error("Failed to copy text: " + error);
        });*/
    }
});

// https://gist.github.com/Rob--W/ec23b9d6db9e56b7e4563f1544e0d546
function escapeHTML(str) {
    // Note: string cast using String; may throw if `str` is non-serializable, e.g. a Symbol.
    // Most often this is not the case though.
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function showModal() {
  document.getElementById('openModal').style.display = 'block';
}

function CloseModal() {
  document.getElementById('openModal').style.display = 'none';
}