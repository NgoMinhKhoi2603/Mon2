function kiemtrasongto(x) {
    if(x==3){
        return true;
    }
    for(var i=2;i<=x/2;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

var songto = 3;

function insongto() {
    if(kiemtrasongto(songto)==true){
        var kq = document.getElementById("ngto");
        kq.innerText = songto;
    }
    songto++;
    if(kiemtrasongto(songto)==false){
        insongto();
    }
}