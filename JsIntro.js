
document.getElementById("demo").innerHTML = "My First JavaScript";

JavaScript in <head> or <body>
------------------------------

<!DOCTYPE html>
<html>
	<head>
		<script>
		function myFunction() {
			document.getElementById("demo").innerHTML = "Paragraph changed.";
		}
		</script>
	</head>
<body> 

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>

External Script :
=================
myScript.js 

function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}

<!DOCTYPE html>
<html>
<body>

<script src="myScript.js"></script>

</body>
</html>


External JavaScript Advantages :
-------------------------------

<script src="myScript1.js"></script>
<script src="myScript2.js"></script>

=> It separates HTML and code
=> It makes HTML and JavaScript easier to read and maintain
=> Cached JavaScript files can speed up page loads


JavaScript Display Possibilities :
================================

=> Writing into an HTML element, using innerHTML.
=> Writing into the HTML output using document.write().
=> Writing into an alert box, using window.alert().
=> Writing into the browser console, using console.log().


Using innerHTML :
-----------------
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>


Using document.write() :
-----------------------
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>

Using document.write() after an HTML document is fully loaded, will delete all existing HTML:
--------------------------------------------------------------------------------------------
 <button onclick="document.write(5 + 6)">Try it</button>

 
Using window.alert() :
--------------------
 
 <!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>

Using console.log() :
 -------------------
<script>
console.log(5 + 6);
</script>




=====================================================================================================================================

JavaScript Variables :
--------------------
var x;

x = 6;

JavaScript Operators 
--------------------
=> arithmetic operators ( + - *  / ) 
=> assignment operator ( = ) 

JavaScript Comments

var x = 5;   // I will be executed
// var x = 6;   I will NOT be executed

/*var x = 5;
var x = 5;
var x = 5;*/ //Multi-Line Comments

JavaScript Identifiers
-----------------------

=> Identifiers are names.

*] In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).
*] The rules for legal names are much the same in most programming languages.
*] In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).

JavaScript is Case Sensitive 
----------------------------
var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";


JavaScript Programs
--------------------
var x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("demo").innerHTML = z;


==========================================================================================================================

JavaScript Data Types
---------------------
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

var x = 16 + "Volvo";

var x = "16" + "Volvo";
var x = 16 + 4 + "Volvo";
var x = "Volvo" + 16 + 4;


JavaScript Types are Dynamic
----------------------------

var x;               // Now x is undefined
var x = 5;           // Now x is a Number
var x = "John";      // Now x is a String

JavaScript Arrays
----------------------------
JavaScript arrays are written with square brackets.
var cars = ["Saab", "Volvo", "BMW"];

JavaScript Objects
----------------------------
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

The typeof Operators
---------------------
typeof ""                  // Returns "string"
typeof "John"              // Returns "string"
typeof "John Doe"          // Returns "string"

typeof 0                   // Returns "number"
typeof 314                 // Returns "number"
typeof 3.14                // Returns "number"
typeof (3)                 // Returns "number"
typeof (3 + 4)             // Returns "number"		

Primitive Datatype
---------------------
string
number
boolean
null
undefined

typeof "John"              // Returns "string" 
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"

Complex Data
-------------
function
object

typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof {name:'John', age:34} // Returns "object"
typeof function myFunc(){}   // Returns "function"

Difference Between Undefined and Null
--------------------------------------
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true