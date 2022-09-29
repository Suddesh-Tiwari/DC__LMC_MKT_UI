let phone = document.getElementById("phone");
let email = document.getElementById("email");
email.addEventListener("blur", () => {
  let str = email.value;
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
phone.addEventListener("blur", () => {
  let str = phone.value;

  if (str === "") {
    document.getElementById("number").innerHTML = "please fill the no.";
    phone.classList.add("is-invalid");
  } else if (isNaN(str)) {
    document.getElementById("number").innerHTML = "only numbers are allowed";
    phone.classList.add("is-invalid");
  } else if (str.length < 10) {
    document.getElementById("number").innerHTML = "invalid number ";
    phone.classList.add("is-invalid");
  } else if (str.length > 10) {
    document.getElementById("number").innerHTML = "invalid number ";
    phone.classList.add("is-invalid");
  } else {
    document.getElementById("number").innerHTML = " ";
    phone.classList.remove("is-invalid");
  }
});
