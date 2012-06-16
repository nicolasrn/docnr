var DEBUG = false;

function debug (text) {
	if (debug === false)
		return; 
	
    if (typeof console !== 'undefined') {
        console.log(text);
    }
    else {
        alert(text);    
    }
}