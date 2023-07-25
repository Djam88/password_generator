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

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt(
      "Enter the desired length of your password (between 8 and 128 characters):"
    )
  );

  // Validate user input for password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return null;
  }

  // Prompt user for character types
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  // Validate user selection for at least one character type
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected.");
    return null;
  }

  // Return an object with user-selected options
  return {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special,
  };
}

// Function to get a random element from an array
function getRandomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password based on user-selected options
function generatePassword() {
  var options = getPasswordOptions();
  var password = [];
  var possibleCharacters = [];

  // Add selected characters to the possible characters array
  if (options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    password.push(getRandomElement(lowercaseCharacters));
  }
  if (options.uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    password.push(getRandomElement(uppercaseCharacters));
  }
  if (options.numeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    password.push(getRandomElement(numericCharacters));
  }
  if (options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    password.push(getRandomElement(specialCharacters));
  }

  // Fill the remaining password length with random characters from possible characters array
  for (var i = password.length; i < options.length; i++) {
    var randomCharacter = getRandomElement(possibleCharacters);
    password.push(randomCharacter);
  }

  // Shuffle the generated password
  password.sort(() => Math.random() - 0.5);

  // Return the generated password as a string
  return password.join("");
}

// Get reference to the "Generate Password" button element
var generateBtn = document.querySelector("#generate");

// Function to handle click event on "Generate Password" button
function handleGeneratePassword() {
  var password = generatePassword();

  // Display the generated password on the page
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

  // Print the generated password to the console
  console.log("Generated Password: " + password);
}

// Add event listener to the "Generate Password" button
generateBtn.addEventListener("click", handleGeneratePassword);
