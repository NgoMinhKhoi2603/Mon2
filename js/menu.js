function update() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        for(i=0;i<3;i++){
            var t = data.data[i].name;
            var x1 = document.getElementById("name"+i);
            x1.innerText = t;
        }

    }
    var link = "https://foodgroup.herokuapp.com/api/menu";
    xhttp.open("get", link, true);
    xhttp.send();
}
update();