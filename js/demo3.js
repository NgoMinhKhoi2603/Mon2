var flag = false;

function demoEvent() {
    if(flag==false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changeText,20);
        flag=true;
    }
}

var x=0;

function changeText() {
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+x+"deg)";
    x++;
}