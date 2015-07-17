

document.addEventListener("deviceready", init, false);
function init() {
	startScan();
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
		    scanned(result.text);
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
