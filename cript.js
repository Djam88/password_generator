// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

console.log("specialCharacters: ", specialCharacters);
console.log("numericCharacters: ", numericCharacters);
console.log("lowerCasedCharacters: ", lowerCasedCharacters);
console.log("upperCasedCharacters: ", upperCasedCharacters);

/// Function to prompt user for password options
function getPasswordOptions() {
  console.log("--- Getting password options ---");
  var length = parseInt(
    prompt("Enter the length of the password (between 8 and 128)")
  );

  // Validate the length
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid password length! Please try again.");
    console.log("Invalid password length");
    return;
  }

  var hasLowercase = confirm("Do you want to include lowercase characters?");
  var hasUppercase = confirm("Do you want to include uppercase characters?");
  var hasNumeric = confirm("Do you want to include numeric characters?");
  var hasSpecial = confirm("Do you want to include special characters?");

  console.log("confirm lowercase:", hasLowercase);
  console.log("confirm uppercase:", hasUppercase);
  console.log("confirm numeric:", hasNumeric);
  console.log("confirm special:", hasSpecial);
  // Validate that at least one character type is selected
  if (!(hasLowercase || hasUppercase || hasNumeric || hasSpecial)) {
    alert("You must select at least one character type!");
    console.log("No character type selected");
    return;
  }

  console.log("Password options:", {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial,
  });

  return {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  console.log("--- Generating password ---");
  var options = getPasswordOptions();

  if (!options) {
    // If user cancels or provides invalid input, return an empty string
    return "";
  }

  var passwordCharacters = [];
  var finalPassword = "";

  if (options.hasLowercase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }

  if (options.hasUppercase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  }

  if (options.hasNumeric) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }

  if (options.hasSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  console.log("Password characters:", passwordCharacters);

  // Generate random password characters based on selected options
  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(passwordCharacters);
    finalPassword += randomCharacter;
    console.log("Generated character:", randomCharacter);
  }

  console.log("Final password:", finalPassword);

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("--- Writing password ---");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
