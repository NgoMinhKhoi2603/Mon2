function update() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);
        var list = data.data;
        for(var i=0;i<list.length;i++){
            var name = list[i].name;
            var image = list[i].icon;
            var str = `<li><img width="50" src="${image}"/> ${name} </li>`;
            var x = document.getElementById("menu");
            x.innerHTML += str;
        }
    }
    var link = "https://foodgroup.herokuapp.com/api/menu";
    xhttp.open("get", link, true);
    xhttp.send();
}
update();