// initializing operator to empty string
var operator = "";

function displayOnBox(newValue) {
  // get the initial value from the input textbox
  let intialValue = document.getElementById("result").value;
  // get the initial value plus the new value that you want to set in the textbox
  let newNewValue = intialValue.concat(newValue);
  // set the value in the textbox
  document.getElementById("result").value = newNewValue;
}

function calculateResult() {
  // Read the expression from the textbox
  var expression = document.getElementById("result").value;
  // splitting the expression on the operator
  var arr1 = expression.split(operator);
  // Identify a, identify operator, identify b
  var a = parseFloat(arr1[0]);
  var b = parseFloat(arr1[1]);
  // Calculate the expression
  //Initialize result variable
  var result = 0;

  if (operator == "+") {
    result = a + b;
  } else if (operator == "-") {
    result = a - b;
  } else if (operator == "/") {
    result = a / b;
  } else if (operator == "*") {
    result = a * b;
  }
  // set result in textbox
  document.getElementById("result").value = result;
}

function displayOnBoxAndSetOperator(newValue) {
  // Display the operator on the textbox
  displayOnBox(newValue);
  // Set operator
  operator = newValue;
}

function clearBoard() {
  // set value of textbox to nothing
  document.getElementById("result").value = "";
}
