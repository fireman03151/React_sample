// MDN Links

/* These links are for Bonfires. Each key/value pair is used to render a Bonfire with approrpiate links.
	

	The text of the key is what the link text will be, e.g. <a href="https://developer ...">Global Array Object</a>
	General convention is to use the page title of the MDN reference page.
*/
var links =
	{
	// ========= GLOBAL OBJECTS
	"Global Array Object" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
	"Global Object" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
	"Global String Object" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
	"Boolean Objects" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
	"RegExp" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
	"Arguments object" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments",

	// =========  PROPERTIES/MISC
	"String.length" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length",
	

	// ========== OBJECT METHODS
	"Object.getOwnPropertyNames()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",
	"Object.keys()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
	"Object.hasOwnProperty()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",


	// ======== STRING METHODS
	"String.charAt()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
	"String.charCodeAt()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt",
	"String.concat()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",
	"String.indexOf()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
	"String.fromCharCode()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode",
	"String.lastIndexOf()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf",
	"String.match()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
	"String.replace()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
	"String.slice()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
	"String.split()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
	"String.substring()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring",
	"String.substr()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr",
	"String.toLowerCase()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
	"String.toString()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString",
	"String.toUpperCase()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",
	// ======== ARRAY METHODS
	"Array.concat()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
	"Array.every()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
	"Array.filter()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
	"Array.forEach()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
	"Array.indexOf()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
	"Array.isArray()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
	"Array.join()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
	"Array.lastIndexOf()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
	"Array.map()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
	"Array.pop()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
	"Array.push()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
	"Array.reduce()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
	"Array.reverse()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
	"Array.shift()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
	"Array.slice()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
	"Array.some()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
	"Array.sort()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
	"Array.splice()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
	"Array.toString()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",

	// ======== MATH METHODS
	"Math.max()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max",
	"Math.min()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min",
	"Math.pow()" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
	"Remainder" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25)",
	
	// ======== GENERAL JAVASCRIPT REFERENCES
	"Arithmetic Operators" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators",
	"Comparison Operators" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators",
	"Details of the Object Model" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
	"Closures" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
	};

module.exports = links;
