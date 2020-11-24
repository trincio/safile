function safile(filename, specialcharArray, direction, escape)
{
	
	
	if (typeof escape === "undefined") escape = '%';
	
	//FORWARD CONVERSION
	if (direction === "fwd" || direction === "undefined" ){
	
		//percent sign represents the escape: let's escape it first
		filename = filename.split("%").join(escape + togglepad(utoa(escape)) + escape);
		
		//iterate over the whole special character set
		for (i=0; i< specialcharArray.length; i++)
		{
			
			//if not the escape
			if (specialcharArray[i]!==escape) filename = filename.split(specialcharArray[i]).join(escape + togglepad(utoa(specialcharArray[i])) + escape);
			console.log("substituting " + specialcharArray[i] + " with " + togglepad(utoa(specialcharArray[i] )));
		}
		
	}
	//BACKWARD CONVERSION (RESTORE)
	else if (direction === "rew"  ){
		

		
		for (i=0; i< specialcharArray.length; i++)
		{
			if (specialcharArray[i]!==escape) filename = filename.split(escape + togglepad(utoa(specialcharArray[i])) + escape).join(specialcharArray[i]);
			console.log("substituting " + escape+ togglepad(utoa(specialcharArray[i])) + escape + " with " + specialcharArray[i] );
		}		
		
		//percent sign represents the escape: let's unescape it as last action
		filename = filename.split(escape + togglepad(utoa(escape)) + escape).join(escape);		
		
		
	}
	else throw safileException(direction);
	
	return filename;
	
 
}

//remove the padding 
function togglepad(str){
	
	str  =  str.split("=").join("");
	return str;
}


function safileException(value) {
   this.value = value;
   this.message = 'the value "' + value + '" is not a valid subcommand for safile(). Use fwd or rew.';
   this.toString = function() {
      return this.value + this.message;
   };
}

 

/**
 * ASCII to Unicode (decode Base64 to original data)
 * @param {string} b64
 * @return {string}
 */
function atou(b64) {
  return decodeURIComponent(escape(atob(b64)));
}


/**
 * Unicode to ASCII (encode data to Base64)
 * @param {string} data
 * @return {string}
 */
function utoa(data) {
  return btoa(unescape(encodeURIComponent(data)));
}