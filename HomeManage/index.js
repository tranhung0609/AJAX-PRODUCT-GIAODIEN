function loadData(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes",
        success: function (loaddata){
            console.log(loaddata)
        }
    })
}