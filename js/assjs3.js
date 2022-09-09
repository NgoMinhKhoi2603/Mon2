function update(obj) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var t2 = data.name;
        var t3 = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2 + ", " + t3;
        var t4 = data.main.pressure;
        document.getElementById("press").innerText = t4;
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q="+ obj.value +"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}
