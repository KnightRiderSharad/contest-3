let signUpBtn = document.getElementById("signUpbtn")
let signInBtn = document.getElementById("signInbtn")
let hide = document.getElementsByClassName("hide")
let visible = document.getElementsByClassName("visible")
let title = document.getElementById("title")
let p = document.getElementById("error")
let userData = []
let key = 0
// let obj = {name: "vivek"}
// userData.push(obj); 
// signInBtn.onclick = function () {}
let randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
signInBtn.addEventListener("click", logginIn())

function logginIn() {
  hide[0].style.maxHeight = "0";
  hide[1].style.maxHeight = "0";
  hide[2].style.maxHeight = "0";
  hide[3].style.maxHeight = "0";
  visible[0].style.maxHeight = "65px";
  visible[1].style.maxHeight = "65px";
  title.innerHTML = "Sign In"
  signUpBtn.classList.add("disable")
  signInBtn.classList.remove("disable")
  p.innerText = "";
  let check = true;
  let email = document.getElementById("signin-email").value
  let password = document.getElementById("signin-password").value
  let btn = document.getElementById("signUpbtn");
  if (email != "" && password != "") {
    let btn = document.getElementById("signInbtn");
    btn.addEventListener("click", function () {
      Swal.fire({
        title: `your Token Number Is ${randomNumber}`,
        text: '',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.value) {
          window.location.href = "./play.html"
          // logginIn();
        }
      });
    });
  }

}
signUpbtn.onclick = function () {
  p.innerText = "";
  hide[0].style.maxHeight = "65px";
  hide[1].style.maxHeight = "65px";
  hide[2].style.maxHeight = "65px";
  hide[3].style.maxHeight = "65px";
  visible[0].style.maxHeight = "0";
  visible[1].style.maxHeight = "0";
  title.innerHTML = "Sign Up"
  signInBtn.classList.add("disable")
  signUpBtn.classList.remove("disable")
  let userData = []

  validateForm()

  function validateForm() {
    let name = document.getElementById("name").value
    let email = document.getElementById("signup-email").value
    let password = document.getElementById("signup-password").value
    let confirmPassword = document.getElementById("confirm-password").value
    let check = true;
    // Name validation
    if (name != "" || email != "" || password != "" || confirmPassword != "") {
      // Check if password and confirm password are the same
      if (password !== confirmPassword) {
        p.innerText = "Passwords do not match";
        check = false;
      }
      // Check if password is the same as name or email
      if (password === name || password === email) {
        p.innerText = "Password cannot be the same as name or email";
        check = false;
      }
      // Password validation
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if (!passwordRegex.test(password)) {
        p.innerText = "Password should have at least 1 capital letter, 1 small, 1 number and 1 special characters";
        check = false;
      }
      // Email validation
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!emailRegex.test(email)) {
        p.innerText = "Invalid email address";
        check = false;
      }
      if (name.length < 2) {
        p.innerText = "please Enter Your Full NAme";
        check = false;
      }



      // Check if email is already registered
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email) {
          p.innerText = "Email already registered";
          check = false;
        }
      }

    }
    if (name != "" && email != "" && password != "" && confirmPassword != "" && check === true) {
      let obj = { id: key, name: name, signup_email: email, signup_password: password }
      userData.push(obj)
      console.log(userData)
      key++
      let btn = document.getElementById("signUpbtn");
      btn.addEventListener("click", function () {
        Swal.fire({
          title: 'Registered Successfully',
          text: '',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.value) {
            logginIn();
          }
        });
      });
    }

  }
}
// export default randomNumber;