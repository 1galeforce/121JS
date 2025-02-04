//G. Erie
//01.30.2025
// scripts.js

// This script uses ES6 syntax

// Function to validate the form inputs
const validateForm = () => {
    const firstname = document.getElementById("fname");
    const lastname = document.getElementById("lname");
    const password = document.getElementById("password");
  
    if (firstname.value === "" && lastname.value === "" && password.value === "") {
      alert("Please Fill in All Entries on The Form");
    } else if (firstname.value === "" && lastname.value === "") {
      alert("Please Enter All Required Information");
    } else if (lastname.value === "" && password.value === "") {
      alert("Please Enter All Required Information");
    } else if (password.value === "" && firstname.value === "") {
      alert("Please Enter All Required Information");
    } else if (firstname.value === "") {
      alert("Please Enter Your First Name");    
    } else if (lastname.value === "") {
      alert("Please Enter Your Last Name");
    } else if (password.value === "") {
      alert("Please Enter Your Password");
    } else if (!validatePassword(password.value)) {
      alert("Enter a Valid Password");
    } else {
      alert("Success!");
    }
  };
  
  // Function to validate the password input
  const validatePassword = (password) => {
    const validLowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
    const validUpperChars = validLowerChars.map(char => char.toUpperCase());
  
    if (password.length < 8) {
      return false;
    }
    let foundUppercaseChar = false;
    let foundLowercaseChar = false;
    for (let i = 0; i < password.length; i++) {
      const passwordChar = password[i];
      if (validUpperChars.includes(passwordChar)) {
        foundUppercaseChar = true;
      } else if (validLowerChars.includes(passwordChar)) {
        foundLowercaseChar = true;
      }
    }
    return foundUppercaseChar && foundLowercaseChar;
  };
  