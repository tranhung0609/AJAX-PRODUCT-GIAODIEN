function home() {
    document.getElementById("content").innerHTML = `
    <header>
    <div class="wrapper">
        <div class="logo">
<!--            <img src="../image/background.jpg" alt="">-->
        </div>
        <ul class="nav-area">
            <li><a href="#">Home</a></li>
            <li><a href="#" onclick="showList()">List</a></li>
            <li><a href="#" onclick="addPost()">Add</a></li>
        </ul>
    </div>

    <div class="welcome-text">
<!--        <h1>Hello</h1>-->
<!--        <a href="#">Hý</a>-->
    </div>
</header>

<!--MODAL SHOW LIST-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Content</th>
      <th scope="col">CreateAt</th>
      <th scope="col">Title</th>
      <th scope="col">Like</th>
    </tr>
  </thead>
  <tbody id="listPost">
  </tbody>
</table>
<div class="pageable"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    `
}

function showList() {
    $('#exampleModal').modal('show');
}



findAll()

function findAll(number) {
    let pageable = document.getElementById("pageable")
    $.ajax({
        type: "GET",
        url: "http://localhost:8003/posts?page=" + number,
        success: function (data) {
            console.log(data)
            displayList(data.content);
            let str = ""
            let num = data.pageable.pageNumber
            console.log(num)
            if (num > 0 || num + 1 === data.totalPages) {
                str += `<a onclick="findAll(${num - 1})">Previous </a>`
            }
            str += `${num + 1}/${data.totalPages}`
            if (num <= 0 || num + 1 !== data.totalPages) {
                str += `<a onclick="findAll(${num + 1})"> Next</a>`
            }
            pageable.innerHTML = str
        }
    });
}
function displayList(list) {
    home()
    let tbody = document.getElementById('listPost');
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += ` <tr>
       <th scope="row">${i + 1}</th>
       <td>${list[i].content}</td>
       <td>${list[i].createAt}</td>
       <td>${list[i].title}</td>
       <td>${list[i].likes}</td>
     </tr>`
    }
    tbody.innerHTML = str;
}
