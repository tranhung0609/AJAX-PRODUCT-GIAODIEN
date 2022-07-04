document.getElementById("content").innerHTML = `
<!--Register Modal-->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal" style="margin-top: 30px">
  Register
</button>
<!-- Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="" method="post">
         <label>UserName</label>
         <input type="text" placeholder="Username" name="username" id="username" class="form-control">
         <label>Password</label>
         <input type="text" name="password" id="password" class="form-control" placeholder="Password">
         <label>ConfirmPassword</label>
         <input type="text" name="confirmPassword" id="confirmPassword" class="form-control" placeholder="ConfirmPassword">
        </form>
      </div>
      <div class="modal-footer">
<!--        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" class="btn btn-primary" onclick="register()">Register</button>
      </div>
    </div>
  </div>
</div>

<!--Login Modal-->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal" style="margin-top: 30px; margin-left: 30px">
  Login
</button>

<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="" method="post">
         <label>UserName</label>
         <input type="text" placeholder="Username" name="login-username" id="login-username" class="form-control">
         <label>Password</label>
         <input type="text" name="login-password" id="login-password" class="form-control" placeholder="Password">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="login()">Login</button>
      </div>
    </div>
  </div>
</div>
`

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

            $('#login-username').val("")
            $('#login-password').val("")
            $('#loginModal').modal('hide')
            abc();
        },
        error: function (error) {
            console.log(error)
        },
    })
}
