// Chapter 1
// ans 1
alert("Hi! This is my Javascript Exercises");

// ans 2
alert("Error! Please enter a valid password.");

// ans 3
alert("Welcome to JS Land...\nHappy Coding!");

// ans 4
alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

// ans 5
console.log("Hello... I can run JS through my web browser's console");

// ans 6
alert("How are you?");

// Chapter 2
// ans 1
var username;

// ans 2
var myName = "Muhammad Hasan Raza";

// ans 3
var message = "Hello World";
alert(message);

// ans 4
var name = "Jhone Doe";
var age = 15;
var course = "Certified Mobile Application Development";
alert(name);
alert(age + " years old");
alert(course);

// ans 5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// ans 6
var email = "example@example.com";
alert("My email address is " + email);

// ans 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// ans 8
document.writeln("Yah! I can write HTML content through JavaScript");

// ans 9
var empty = "";
alert(empty);
document.writeln(empty);

// Chapter 3
// ans 1
var age = 15;
alert("I am " + age + " years old");

// ans 2
var visitCount = 14;
alert("You have visited this site " + visitCount + " times");

// ans 3
var birthYear = 1990;
document.writeln("My birth year is " + birthYear);
document.writeln("Data type of my declared variable is number");

// ans 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.writeln(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// Chapter 4
// ans 1
var name, age, course;

// ans 2
// 5 Legal variable names
var myName;
var age;
var courseTitle;
var $price;
var _username;
// 5 Illegal variable names
// var 1name;
// var my-name;
// var my name;
// var @course;
// var #price;

// ans 3
document.writeln("<h1>Rules for naming JS variables</h1><br>");
document.writeln("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>");
document.writeln("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
document.writeln("Variable names are case sensitive<br>");
document.writeln("Variable names should not be JS keywords<br><br>");

// Chapter 5
// ans 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.writeln("The sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// ans 2
var num1 = 10;
var num2 = 5;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modulus = num1 % num2;
document.writeln("The difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
document.writeln("The product of " + num1 + " and " + num2 + " is " + product + "<br>");
document.writeln("The quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
document.writeln("The modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

// ans 3
var num;
document.writeln("Value after variable declaration is: " + num + "<br>");
num = 5;
document.writeln("Initial value: " + num + "<br>");
num++;
document.writeln("Value after increment is: " + num + "<br>");
num += 7;
document.writeln("Value after addition is: " + num + "<br>");
num--;
document.writeln("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.writeln("The remainder is: " + remainder + "<br><br>");

// ans 4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");

// ans 5
var num = 4;
document.writeln("Table of " + num + "<br>");
for (var i = 1; i <= 10; i++) {
    document.writeln(num + " x " + i + " = " + (num * i) + "<br>");
}

// ans 6
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.writeln("<br>" + celsius + "°C is " + fahrenheit + "°F<br>");
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C<br><br>");

// ans 7
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.writeln("Price of item 1 is " + item1Price + "<br>");
document.writeln("Quantity of item 1 is " + item1Quantity + "<br>");
document.writeln("Price of item 2 is " + item2Price + "<br>");
document.writeln("Quantity of item 2 is " + item2Quantity + "<br>");
document.writeln("Shipping Charges " + shippingCharges + "<br><br>");
document.writeln("Total cost of your order is " + totalCost + "<br><br>");

// ans 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.writeln("Total marks: " + totalMarks + "<br>");
document.writeln("Marks obtained: " + marksObtained + "<br>");
document.writeln("Percentage: " + percentage + "%<br><br>");

// ans 9
var usDollars = 10;
var saudiRiyals = 25;
var totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);
document.writeln("Total currency in PKR: " + totalPKR + "<br>");

// ans 10
var num = 10;
var result = ((num + 5) * 10) / 2;
document.writeln("The result of the expression is: " + result + "<br><br>");

// ans 11
var currentYear = 2026;
var birthYear = 2005;
var age = currentYear - birthYear;
document.writeln("Your age is: " + age + "<br><br>");

// ans 12
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);
document.writeln("The circumference is: " + circumference.toFixed(2) + "<br>");
document.writeln("The area is: " + area.toFixed(2) + "<br><br>");

// ans 13
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalSnacks = (maxAge - currentAge) * amountPerDay * 365;
document.writeln("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");

// Chapter 12-13
// ans 1
var char = prompt("Enter a character:");
if (char.length === 1) {
    var asciiCode = char.charCodeAt(0);
    if (asciiCode >= 48 && asciiCode <= 57) {
        document.writeln(char + " is a number.<br><br>");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        document.writeln(char + " is an uppercase letter.<br><br>");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        document.writeln(char + " is a lowercase letter.<br><br>");
    } else {
        document.writeln(char + " is a special character.<br><br>");
    }
} else {
    document.writeln("Please enter a single character.<br><br>");
}

// ans 2
var num1 = 8;
var num2 = 12;
if (num1 > num2) {
    document.writeln(num1 + " is larger than " + num2 + ".<br><br>");
} else if (num2 > num1) {
    document.writeln(num2 + " is larger than " + num1 + ".<br><br>");
} else {
    document.writeln("Both numbers are equal.<br><br>");
}

// ans 3
var num = +prompt("Enter a number:");
if (num > 0) {
    document.writeln(num + " is a positive number.<br><br>");
} else if (num < 0) {
    document.writeln(num + " is a negative number.<br><br>");
} else {
    document.writeln(num + " is zero.<br><br>");
}    

// ans 4
var char = prompt("Enter a character:");
if (char.length === 1) {
    var lowerChar = char.toLowerCase();
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        document.writeln(char + " is a vowel.<br><br>");
    } else {
        document.writeln(char + " is not a vowel.<br><br>");
    }
} else {
    document.writeln("Please enter a single character.<br><br>");
}

// ans 5
var correctPassword = "abc123";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
    document.writeln("Please enter your password.<br><br>");
} else if (userPassword === correctPassword) {
    document.writeln("Correct! The password you entered matches the original password.<br><br>");
} else {
    document.writeln("Incorrect password.<br><br>");
}

// ans 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.writeln(greeting);

// ans 7
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 0 && time < 1200) {
    document.writeln("Good morning!");
} else if (time >= 1200 && time < 1700) {
    document.writeln("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    document.writeln("Good evening!");
}else if (time >= 2100 && time < 2359) {
    document.writeln("Good night!");
} else {
    document.writeln("Invalid time format. Please enter a valid time in 24-hour format.");
}

// Chapter 14-16
// ans 1
var studentNames = [];

// ans 2
var studentNames = new Array();

// ans 3
var stringsArray = ["Hello", "World", "JavaScript"];

// ans 4
var numbersArray = [1, 2, 3, 4, 5];

// ans 5
var booleanArray = [true, false, true];

// ans 6
var mixedArray = ["Hello", 42, true, "World", 3.14];

// ans 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.writeln("<h1>Qualifications:</h1><br>");
for (var i = 0; i < qualifications.length; i++) {
    document.writeln((i + 1) + ") " + qualifications[i] + "<br>");
}

// ans 8
var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.writeln("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
}

// ans 9
var colorNames = ["Red", "Green", "Blue"];
document.writeln("Initial array: " + colorNames.join(", ") + "<br><br>");
var colorToAddStart = prompt("Enter a color to add at the beginning:");
colorNames.unshift(colorToAddStart);
document.writeln("After adding color at the beginning: " + colorNames.join(", ") + "<br><br>");
var colorToAddEnd = prompt("Enter a color to add at the end:");
colorNames.push(colorToAddEnd);
document.writeln("After adding color at the end: " + colorNames.join(", ") + "<br><br>");
var colorToAddStart2 = prompt("Enter two colors to add at the beginning:");
colorNames.unshift(colorToAddStart2);
document.writeln("After adding two colors at the beginning: " + colorNames.join(", ") + "<br><br>");
colorNames.shift();
document.writeln("After removing the first color: " + colorNames.join(", ") + "<br><br>");
colorNames.pop();
document.writeln("After removing the last color: " + colorNames.join(", ") + "<br><br>");
var indexToAdd = +prompt("Enter the index number to add a color:");
var colorToAddIndex = prompt("Enter a color to add at index " + indexToAdd + ":");
colorNames.splice(indexToAdd, 0, colorToAddIndex);
document.writeln("After adding color at index " + indexToAdd + ": " + colorNames.join(", ") + "<br><br>");
var indexToRemove = +prompt("Enter the index number to remove a color:");
var numColorsToRemove = +prompt("Enter the number of colors to remove from index " + indexToRemove + ":");
colorNames.splice(indexToRemove, numColorsToRemove);
document.writeln("After removing " + numColorsToRemove + " color(s) from index " + indexToRemove + ": " + colorNames.join(", ") + "<br><br>");

// ans 10
var studentScores = [320, 230, 480, 120];
document.writeln("Scores of students: " + studentScores.join(", ") + "<br><br>");
studentScores.sort(function(a, b) {
    return a - b;
});
document.writeln("Ordered scores of students: " + studentScores.join(", ") + "<br><br>");

// ans 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.writeln("Cities list: " + cities.join(", ") + "<br><br>");
var selectedCities = cities.slice(2, 4);
document.writeln("Selected cities list: " + selectedCities.join(", ") + "<br><br>");

// ans 12
var arr = ["This", "is", "my", "cat"];
document.writeln("Array: " + arr.join(", ") + "<br><br>");
var joinedString = arr.join(" ");
document.writeln("String: " + joinedString + "<br><br>");

// ans 13
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.writeln("Devices: " + devices.join(", ") + "<br><br>");
var fifoDevice = devices.shift();
document.writeln("Out:<br>" + fifoDevice + "<br>");
fifoDevice = devices.shift();
document.writeln("Out:<br>" + fifoDevice + "<br>");
fifoDevice = devices.shift();
document.writeln("Out: <br>" + fifoDevice + "<br>");
fifoDevice = devices.shift();
document.writeln("Out: <br>" + fifoDevice + "<br><br>");

// ans 14
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.writeln("Devices: " + devices.join(", ") + "<br><br>");
var lifoDevice = devices.pop();
document.writeln("Out:<br>" + lifoDevice + "<br>");
lifoDevice = devices.pop();
document.writeln("Out:<br>" + lifoDevice + "<br>");
lifoDevice = devices.pop();
document.writeln("Out:<br>" + lifoDevice + "<br>");
lifoDevice = devices.pop();
document.writeln("Out:<br>" + lifoDevice + "<br><br>");

// ans 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln("<select><option>" + manufacturers.join("</option><option>") + "</option></select><br><br>");

// Chapter 17-20
// ans 1
var empty = [[],[],[]];

// ans 2
var numbers = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 0; i < numbers.length; i++) {
    document.writeln(numbers[i].join(" ") + "<br>");
}

// ans 3
document.writeln("<br>")
for (let j = 1; j <= 10; j++) {
    document.writeln(j + "<br>")   
}

// ans 4
var tableNum = +prompt("Enter any multiplication table number");
var asklength = +prompt("Enter the length number of your table");
document.writeln(`<br>Table of ${tableNum}<br><br>`)
for (let c = 1; c <= asklength; c++) {
    document.writeln(`${tableNum} x ${c} = ${tableNum*c}<br>`);
}

// ans 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.writeln("<br>")
for (let z = 0; z < fruits.length; z++) {
    document.writeln(fruits[z] + "<br>")   
}
document.writeln("<br>")
for (let z = 0; z < fruits.length; z++) {
    document.writeln(`Element at index ${z} is ${fruits[z]}<br>`)   
}

// ans 6
document.writeln("<br><b>Counting:</b><br><br>")
for (let x = 1; x <= 15; x++) {
        document.writeln(x + ",")
}
document.writeln("<br><br><b>Reverse counting:</b><br><br>")
for (let m = 10; m > 0; m--) {
        document.writeln(m + ",")
}
document.writeln("<br><br><b>Even:</b><br><br>")
var arrNum3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let n = 0; n < arrNum3.length; n++) {
    if (arrNum3[n] % 2 === 0) {
        document.writeln(arrNum3[n] + ",")
    }
}
document.writeln("<br><br><b>Odd:</b><br><br>")
for (let v = 0; v < arrNum3.length; v++) {
    if (arrNum3[v] % 2 === 1) {
        document.writeln(arrNum3[v] + ",")
    }
}
document.writeln("<br><br><b>Series:</b><br><br>")
for (let n = 1; n < arrNum3.length; n++) {
    if (arrNum3[n] % 2 === 0) {
        document.writeln(arrNum3[n] + "k,")
    }
}
// ans 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userAnswer = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
document.writeln("<br><br>")
if (A.includes(userAnswer)) {
    document.writeln(`${userAnswer} is <b>available</b> at index ${A.indexOf(userAnswer)} in our bakery<br><br>`)
}else {
    document.writeln(`We are sorry. ${userAnswer} is <b>not available</b> in our bakery<br><br>`)
}

// ans 8
var arrNum4 = [24, 53, 78, 91, 12];
var largest = arrNum4[0];
for (let p = 1; p < arrNum4.length; p++) {
    if (arrNum4[p] > largest) {
        largest = arrNum4[p];
    }
}
document.writeln(`The largest number is ${largest}<br><br>`);

// ans 9
var arrNum5 = [24, 53, 78, 91, 12];
var smallest = arrNum5[0];
for (let q = 1; q < arrNum5.length; q++) {
    if (arrNum5[q] < smallest) {
        smallest = arrNum5[q];
    }
}
document.writeln(`The smallest number is ${smallest}<br><br>`);

// ans 10
for (let h = 1; h <= 100; h++) {
    if (h % 5 === 0) {
        document.writeln(h + ",")
    }
}