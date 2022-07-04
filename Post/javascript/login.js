document.getElementById("content").innerHTML=`
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" id="login-username">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" id="login-password">
      <label>Password</label>
    </div>
    <a href="#" onclick="login()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
`

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
            console.log(user)
            alert("Đăng nhập thành công")
            home()
        },
        error: function (error) {
            console.log(error)
        },
    })
}