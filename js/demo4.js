function update1(){
    var bg = document.getElementById("bg-fade");
    bg.style.display = "block";
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        //convert to object of js
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        //console.log(data.main.temp);
        var t2 = data.name;
        var t3 = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2 + ", " + t3;
        var t4 = data.main.pressure;
        document.getElementById("press").innerText = t4;
        bg.style.display = "none";
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}
function update2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        //convert to object of js
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        //console.log(data.main.temp);
        var t2 = data.name;
        var t3 = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2 + ", " + t3;
        var t4 = data.main.pressure;
        document.getElementById("press").innerText = t4;
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}
function update3(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        //convert to object of js
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        //console.log(data.main.temp);
        var t2 = data.name;
        var t3 = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2 + ", " + t3;
        var t4 = data.main.pressure;
        document.getElementById("press").innerText = t4;
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}
function update4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        //convert to object of js
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        //console.log(data.main.temp);
        var t2 = data.name;
        var t3 = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2 + ", " + t3;
        var t4 = data.main.pressure;
        document.getElementById("press").innerText = t4;
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}
function update5(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        //convert to object of js
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        //console.log(data.main.temp);
        var t2 = data.name;
        var t3 = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2 + ", " + t3;
        var t4 = data.main.pressure;
        document.getElementById("press").innerText = t4;
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get", link, true);
    xhttp.send();
}

