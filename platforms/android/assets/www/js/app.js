
var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
                        if (result.format == "qrcode"){
                            switch(result.text){
                                case 1000:
                                    resultDiv.innerHTML = "hai trovato Baymax";
                                    break;
                                case 2000:
                                    resultDiv.innerHTML = "hai trovato Pikachu";
                                    break;
                            }
                        }
			/*var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;*/
			
 			resultDiv.style.visibility='visible';
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
