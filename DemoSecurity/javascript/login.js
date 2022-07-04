document.getElementById('content').innerHTML = `
<h2>Sign in/up Form</h2>
<div class="container" id="container">
  <div class="form-container sign-up-container">
    <form action="" method="post">
      <h1>Create Account</h1>
      <input type="text" placeholder="FullName" name="full_name"/>
      <input type="text" placeholder="Password" name="password" id=""/>
      <input type="password" placeholder="ConfirmPassword" name="confirmpassword"/>
      <button>Sign Up</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="" method="post">
      <h1>Sign in</h1>
      <input type="text" placeholder="UserName" name="login-username" id="login-username"/>
      <input type="password" placeholder="Password" name="login-password" id="login-password"/>
      <a href="#">Forgot your password?</a>
    </form>
     <button onclick="login()">Login</button>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <button class="ghost" id="signIn">Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button class="ghost" id="signUp" onclick="register()">Register</button>
      </div>
    </div>
  </div>
</div>
`
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function register(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value

    let user = {
        username : username,
        password : password,
        confirmPassword : confirmPassword
    }
    console.log(user)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8000/register",
        data: JSON.stringify(user),
        success: function () {
            $('#register-username').val("")
            $('#register-password').val("")
            $('#register-confirmPassword').val("")
            $('#registerModal').modal('hide')
            alert("Đăng kí thành công")
            $('#loginModal').modal('show')
        },
        error: function (error) {
            console.log(error)
        },
    })
}


function login() {
    let username = document.getElementById("login-username").value
    let password = document.getElementById("login-password").value

    let user = {
        username: username,
        password: password
    }
    console.log(user)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8000/login",
        data: JSON.stringify(user),
        success: function () {

            // $('#login-username').val("")
            // $('#login-password').val("")
            // $('#loginModal').modal('hide')
            alert("Thành công")
            abc();
        },
        error: function (error) {
            console.log(error)
        },
    })
}
