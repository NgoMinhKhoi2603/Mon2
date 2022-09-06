var songto = 2;

function kiemtrasongto(x) {
    if(x == 2 || x == 3){
        return true;
    }
    for(var i=2;i<=x/2;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}
var demden10 = 0;
function insongto() {
    if(kiemtrasongto(songto)==true){
        var bb = document.getElementById("snt");
        bb.innerText += " "+songto;
        demden10++;
    }
    songto++;
    if(demden10>=10){
        clearInterval(kq2);
    }
}
var kq2 = setInterval(insongto, 1000);