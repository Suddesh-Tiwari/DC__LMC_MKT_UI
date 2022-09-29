let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let userName = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let schoolName = document.getElementById("schoolName");

firstName.addEventListener("blur", () => {
  let str = firstName.value;

  if (str.length > 10) {
    document.getElementById("f-name").innerHTML =
      "only 10 characters are allowed";
    firstName.classList.add("is-invalid");
  } else if (str === "") {
    document.getElementById("f-name").innerHTML = "this field is empty";
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.remove("is-invalid");
    document.getElementById("f-name").innerHTML = "";
  }
});
email.addEventListener("blur", () => {
  let str = email.value;
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(regex, str);
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    document.getElementById("mail").innerHTML = "";
    console.log("valid");
  } else {
    document.getElementById("mail").innerHTML = "Enter valid Email";
    email.classList.add("is-invalid");
    console.log(" not valid");
  }
  if (str === "") {
    document.getElementById("mail").innerHTML = "please fill the email";
  } else if (
    str.charAt(str.length - 4) != "." &&
    str.charAt(str.length - 3) != "."
  ) {
    document.getElementById("mail").innerHTML = "Enter valid Email";
  }
});
lastName.addEventListener("blur", () => {
  let str = lastName.value;

  if (str.length > 10) {
    document.getElementById("lastName").innerHTML =
      "only 10 characters are allowed";
    lastName.classList.add("is-invalid");
  } else if (str === "") {
    document.getElementById("lastName").innerHTML = "this field is empty";
    lastName.classList.add("is-invalid");
  } else {
    lastName.classList.remove("is-invalid");
    document.getElementById("lastName").innerHTML = "";
  }
});
userName.addEventListener("blur", () => {
  let str = userName.value;

  if (str.length > 15) {
    document.getElementById("user").innerHTML =
      "only 15 characters are allowed";
    userName.classList.add("is-invalid");
  } else if (str === "") {
    document.getElementById("user").innerHTML = "this field is empty";
    userName.classList.add("is-invalid");
  } else {
    userName.classList.remove("is-invalid");
    document.getElementById("user").innerHTML = "";
  }
});
password.addEventListener("blur", () => {
  let str = password.value;

  if (str === "") {
    document.getElementById("Password").innerHTML = "this field is empty";
    password.classList.add("is-invalid");
  } else {
    password.classList.remove("is-invalid");
    document.getElementById("Password").innerHTML = "";
  }
});
confirmPassword.addEventListener("blur", () => {
  let str = confirmPassword.value;

  if (str === "") {
    document.getElementById("confirmPass").innerHTML = "this field is empty";
    confirmPassword.classList.add("is-invalid");
  } else if (str != password.value) {
    confirmPassword.classList.add("is-invalid");
    document.getElementById("confirmPass").innerHTML = "invalid password";
  } else {
    confirmPassword.classList.remove("is-invalid");
    document.getElementById("confirmPass").innerHTML = "";
  }
});

schoolName.addEventListener("blur", () => {
  let str = schoolName.value;

  if (str === "") {
    document.getElementById("school").innerHTML = "this field is empty";
    schoolName.classList.add("is-invalid");
  } else {
    schoolName.classList.remove("is-invalid");
    document.getElementById("school").innerHTML = "";
  }
});

function validation() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let schoolName = document.getElementById("schoolName").value;
  let check1 = document.getElementById("Check1").value;
  console.log(check1);

  if (firstName == "") {
    document.getElementById("f-name").innerHTML = "Please fill the first name";
    return false;
  }

  if (lastName == "") {
    document.getElementById("lastName").innerHTML = "please fill the last name";
    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("mail").innerHTML = "Enter valid Email";
    return false;
  }
  if (userName == "") {
    document.getElementById("user").innerHTML = "please fill the username";
    return false;
  }
  if (userName.length < 4 || userName.length > 20) {
    document.getElementById("user").innerHTML =
      " username lenght between 4 and 20";
    return false;
  }
  if (!isNaN(userName)) {
    document.getElementById("user").innerHTML = " only characters are allowed";
    return false;
  }
  if (password == "") {
    document.getElementById("Password").innerHTML = "please fill the password";
    return false;
  }
  if (password.length < 4 || password.length > 20) {
    document.getElementById("Password").innerHTML =
      "password lenght between 4 and 20";
    return false;
  }
  if (password != confirmPassword) {
    document.getElementById("confirmPass").innerHTML = "password not matched";
    return false;
  }

  if (confirmPassword == "") {
    document.getElementById("confirmPass").innerHTML = "please fill this field";
    return false;
  }
  if (schoolName == "") {
    document.getElementById("school").innerHTML = "please enter school name ";
    return false;
  }
  if (!isNaN(schoolName)) {
    document.getElementById("school").innerHTML = "enter valid name  ";
    return false;
  }
}
