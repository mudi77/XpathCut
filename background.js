//var isExtensionOn = true;

chrome.runtime.onMessage.addListener(
function (request, sender, sendResponse) {
	
//alert('mam message');	

    // if (request.state == "ON") {
        // isExtensionOn = request.state;
		
		// alert('hodnota messagu je : ' + request.state);	
    // }
	
	if (request.state == "ON") {
         sendResponse(true);
     }

	 if (request.state == "OFF") {
         sendResponse(false);
     }
	 
    // if (request.state == "OFF") {
        // sendResponse(isExtensionOn);
    // }
});


 chrome.browserAction.onClicked.addListener(function(tab) {
	 
//	  chrome.tabs.executeScript(null,{file:"jquery-1.11.3.min.js"}); 
	  
	  chrome.tabs.insertCSS(null,{file:"xpth.css"});
	  
	  chrome.tabs.executeScript(null,{file:"xpth.js"});  
  
});


  