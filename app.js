var firstName = prompt("Enter Your First Name: "),lastName = prompt("Enter Your Last Name");
var fullName = firstName +" "+ lastName;
alert("welcome to my assignment " + fullName);




var mobileName = prompt("Enter Your Favourite Mobile Name: ");

alert(mobileName + " Your Mobile Name Length Is: " + mobileName.length);



var string = "pakistani"
alert("index of N is : "+ string.indexOf("n"));




var string2 = "hello world"
alert("last index of l is : "+ string2.lastIndexOf("l"));



var string3 = "pakistani"

alert("character at index 3 is : "+string3.charAt(3))





var firstName1 = prompt("Enter Your First Name: "),lastName2 = prompt("Enter Your Last Name");
var fullName1 = firstName1.concat(lastName2);
alert("welcome to my assignment " + fullName1);



var city1 = "hyderabad"

alert(city1.replace("hyder","islam"));

var message = "“Ali and Sami are best friends. They play cricket and football together";
alert(message.replaceAll("and","&"));



var numString = "472"
alert(typeof numString)
var stringNum = + numString;
alert(typeof stringNum);



var input = prompt("Enter Lower Case letters");
var result = input.toLocaleUpperCase();
alert(input+ " " + result);



var input2 = prompt("Enter any Word to conver Title case:");
var letOne = input2.slice(0,1).toUpperCase();
var remLet = input2.slice(1).toLowerCase();
var titleCase = letOne + remLet;
alert(input2 +" "+titleCase);




var num = 35.36 ;
var str = ""+ num;
alert(str.replace(".",""))




var username; 
var isValid; 


do {
     username = prompt("Enter a username:");
isValid = true;
for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i); 
if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            isValid = false; 
            break; 
        }
    }
if (!isValid) {
        alert("Invalid username. Please enter a username without special characters (@, ., !, ,).");
    }

} while (!isValid); 

alert(`Username '${username}' is valid!`);

var a = ["cake", "apple", "pie", "cookie", "chips", "patties"];

var userInput = prompt("Search Items").toLowerCase();
var flag = false;
for(var i = 0;  i < a.length ; i++ ){
    if(a[i] === userInput){
        flag = true;
        alert("product available at index of "+ a.indexOf(userInput) + " in our bakery");
    }
    
}
if(flag === false){
    alert("not available");
}


var password;

do {
    password = prompt("Enter a password:");

    var isValid = true;
    var hasAlphabet = false;
    var hasNumber = false;

    if (password.length < 6) {
        isValid = false;
    }

    if (!isNaN(password.charAt(0))) {
        isValid = false;
    }

    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        }
        if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }

    if (!hasAlphabet || !hasNumber) {
        isValid = false;
    }

    if (!isValid) {
        alert("Invalid password. Please ensure it meets the following requirements:\n" +
              "1. At least 6 characters long\n" +
              "2. Should not start with a number\n" +
              "3. Must contain both alphabets and numbers");
    }

} while (!isValid);

alert(`Password '${password}' is valid!`);





var university = "University of Karachi";
var res = university.split("")

console.log(res);



var userInput = prompt("Enter a string:");
if (userInput.length > 0) {
    alert("The last character is: " + userInput[userInput.length - 1]);
} else {
    alert("The input is empty.");
}



var str = "The quick brown fox jumps over the lazy dog";
var words = str.toLowerCase().split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

console.log("The word 'the' occurs " + count + " times.");







