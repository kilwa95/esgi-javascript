function ucfirst(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
		var res = chaine.split(" ");
}

function camelCase(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function snake_case(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
		var res = chaine.split(" ");
		rLen = res.length;
		for (i = 0; i < rLen; i++) {
		  text += res[i];
		  if(i != rLen-1){
			  text += "_";
		  }
		}
}

function leet(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function prop_access(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function verlan(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function yoda(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function vig(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}


console.log(capitalize("hello world"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
