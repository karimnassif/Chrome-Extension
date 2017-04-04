function init() {
	b1 = document.getElementById('button1');
	b2 = document.getElementById('button2');
	b3 = document.getElementById('button3');
	b4 = document.getElementById('button4');
	b1.addEventListener('click',changeColor);
	b2.addEventListener('click',changeColor);
	b3.addEventListener('click',changeColor);
}

function changeColor() {
    chrome.runtime.sendMessage({
 		greeting: "hello"
    },
    function(response) {
    	document.getElementById("text");
    });
}



document.addEventListener('DOMContentLoaded', init);


