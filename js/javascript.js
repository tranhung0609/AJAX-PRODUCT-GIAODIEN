let show = document.getElementById("display")

function display(data) {
    let str = ""
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        str += `<tr><td style="text-align: center">${data[i].name}</td>
        <td style="text-align: center">${data[i].price}</td>
        <td style="text-align: center">${data[i].quantity}</td></tr>`
    }
    show.innerHTML = str
}

function findAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/products",
        success: function (data) {
            display(data)
        }, error: function (error) {
            console.log(error)
        }
    })
}

function showAddForm() {
    let str =
        `<input type="text" id="name">
<input type="text" id="price">
<input type="text" id="quantity">
<button onclick="save()" id="button-insert"> Save</button>`
    show.innerHTML = str
}


function save() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    let pk = {
        name: name,
        price: price,
        quantity: quantity
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: 'POST',
        url: 'http://localhost:8080/products',
        data: JSON.stringify(pk),
        success: function () {
            document.getElementById('name').value=""
            document.getElementById('price').value=""
            document.getElementById('quantity').value=""
            $('#modal-insert').modal('hide')
            findAll()
        },
        error: function (error) {
            console.log(error)
        }
    })
}