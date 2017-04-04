chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello")
    	chrome.tabs.executeScript({
    		file: "red.js"
    	});
    	return true; 
  });
