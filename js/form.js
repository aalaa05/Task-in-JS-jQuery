let userNameInput = document.getElementById("userNameInput");
let emailAdressInput = document.getElementById("emailAdressInput");
let userPhoneInput = document.getElementById("userPhoneInput");
let textArea = document.getElementById("textArea");

let userNameAlert = document.getElementById("userNameAlert");
let emailAdressAlert = document.getElementById("emailAdressAlert");
let userPhoneAlert = document.getElementById("userPhoneAlert");
let users = [];

let table = document.getElementById("table");

function validationUsertName() {
  let regex = /^[A-Z][a-z]{3,6}$/;
  if (regex.test(userNameInput.value) == true) {
    userNameAlert.classList.replace("d-block", "d-none");
    userNameInput.classList.add("is-valid");
    userNameInput.classList.remove("is-invalid");
    return true;

  } else {
    userNameAlert.classList.replace("d-none", "d-block");
    userNameInput.classList.add("is-invalid");
    userNameInput.classList.remove("is-valid");
    return false;

  }

}



function validationUsertEmail() {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3})+$/;
  if (regex.test(emailAdressInput.value) == true) {
    emailAdressAlert.classList.replace("d-block", "d-none");
    emailAdressInput.classList.add("is-valid");
    emailAdressInput.classList.remove("is-invalid");
    return true;

  } else {
    emailAdressAlert.classList.replace("d-none", "d-block");
    emailAdressInput.classList.add("is-invalid");
    emailAdressInput.classList.remove("is-valid");
    return false;

  }

}

function validationUserPhone() {
  let regex = /^(002|\+2)?01[01250-9]{9}$/;
  if (regex.test(userPhoneInput.value) == true) {
    userPhoneAlert.classList.replace("d-block", "d-none");
    userPhoneInput.classList.add("is-valid");
    userPhoneInput.classList.remove("is-invalid");
    return true;

  } else {
    userPhoneAlert.classList.replace("d-none", "d-block");
    userPhoneInput.classList.add("is-invalid");
    userPhoneInput.classList.remove("is-valid");
    return false;

  }

}


function addUser() {
  if (validationUsertName() == true && validationUsertEmail() == true && validationUserPhone() == true) {
    let user =
    {
      name: userNameInput.value,
      email: emailAdressInput.value,
      phone: userPhoneInput.value,
    }
    table.classList.remove("d-none");
    users.push(user);//1
    displayUsers(users);
    clearForm();
  }
}

function clearForm() {
  userNameInput.value = "";
  emailAdressInput.value = "";
  emailAdressInput.value = "";
  userPhoneInput.value = "";


  userNameAlert.classList.replace("d-block", "d-none");
  userNameInput.classList.remove("is-valid");
  emailAdressAlert.classList.replace("d-block", "d-none");
  emailAdressInput.classList.remove("is-valid");
  userPhoneAlert.classList.replace("d-block", "d-none");
  userPhoneInput.classList.remove("is-valid");

}


function displayUsers(usersArray) {
  let cartoona = ``;
  for (let i = 0; i < usersArray.length; i++)//2
  {
    cartoona += `<tr>
                    <td>${i + 1}</td>
                    <td>${usersArray[i].name}</td>
                    <td>${usersArray[i].email}</td>
                    <td>${usersArray[i].phone}</td>
                    <td><button onclick="deleteUser(${i})"  class="btn myBtn">Delete</button></td>
                  </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}

function deleteUser(index) {

  users.splice(index, 1);
  displayUsers(users);
}

function numbersOfChar(k) {
  let textAreaVal = textArea.value;
  console.log(textAreaVal.length);
  document.getElementById("numT").innerHTML = textAreaVal.length;
  if (textAreaVal.length == 30) {
    document.getElementById("textA").innerHTML = "Finish";
  }

}


textArea.addEventListener("keyup", numbersOfChar)

userNameInput.addEventListener("keyup", validationUsertName);
emailAdressInput.addEventListener("keyup", validationUsertEmail);
userPhoneInput.addEventListener("keyup", validationUserPhone);
