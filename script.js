//Greeting name:
function greet(name) {
    if (!name.trim()) {
        return "Hello, stranger! Please enter your name.";
    }
    return "Hello " + name + "!";
}
//console.log(greet("Ali")); // Output: Hello Ali!
function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    let message = greet(name);
    document.getElementById("greetingMessage").textContent = message;
}

//Adding numbers:
function addNumbers(a, b) {
    return a + b;
}

function displaySum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers!";
    } else {
        let sum = addNumbers(num1, num2);
        document.getElementById("result").textContent = "Sum: " + sum;
    }
}

//Function Scope:
let x = 10; // Global variable

console.log("Global x before function call:", x);

function changeValue() {
    let x = 20; // Local variable inside function
    console.log("Local x inside function:", x);
    document.getElementById("output").innerText = "Local x inside function: " + x;
}

console.log("Global x after function call:", x);

//Increment count:
const incrementCount = outerFunction();

// Call the returned inner function multiple times when the button is clicked
function incrementCount() {
    incrementCount();
}