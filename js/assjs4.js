function update() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);
        var weather = data.list;
        for(var i=0;i<16;i++){
            var time = weather[i].dt_txt;
            var temp = weather[i].main.temp;
            var type = weather[i].weather[0].description;
            var icon = weather[i].weather[0].icon;
            var str = time +"<br/>"+ `<div style='float: left;'><span style='font-size: 30px;'>${temp}</span><span style='font-size: 30px;'><sup>o</sup>C</span><br/><span style='float: left;'>${type}</span></div>`;
            var x = document.getElementById("box"+i);
            x.innerHTML = str;
            document.getElementById("box"+i).innerHTML += `<img style="margin-left: 10px;" width="100px" src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`
        }
    }
    var link = "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}
update();