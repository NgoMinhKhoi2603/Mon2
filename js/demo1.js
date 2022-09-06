var x;
x = 10;
x = "xin chao cac ban";
x = 3.14;
var y = 20;
var z = x + y; //23.14
x = "hello";
var k = x + y;
// hello + 10 -> hello10
// 10 + hello -> 10hello
// hello + world -> helloworld

console.log(k);// in ra man hinh
var t = true;// false
for(var i=0;i<10;i++){
    console.log("i="+i);
}
var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
// duyet mang theo chi muc (index)
for(var i=0;i<ar.length;i++){
    console.log(ar[i]);
}
// duyet mang theo kieu xet tung phan tu (foreach)
ar.map(xyz=>{
    console.log(xyz);
});

function tinhtong(a, b) {
    return a+b;
}

var tk = tinhtong(5,3);
var tk2 = tinhtong("hello", 10);

console.log(tk);
console.log(tk2);

function demo(){
    console.log("Hello everybody...")
    console.log("Hello everybody...")
    console.log("Hello everybody...")
}

//setTimeout(demo, 3000);// chờ 3s(3000ms) mới chạy hàm demo - callback function
//setInterval(demo,1500);// chạy liên tục vô hạn mỗi 1,5s(1500ms)

console.log("ABCXYZ...");
console.log("AAA...");
console.log("BBB...");

var n = 10;
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText = n;
    n--;
    if(n<0){
        clearInterval(si);
    }
}

var si = setInterval(countdown,1000);

var dem = 0;
var m = 0;
function insochan() {
    if(dem % 2 == 0){
        var aa = document.getElementById("tangchan");
        aa.innerText += " "+dem;
        console.log(dem);
        m++;
    }
    dem++;
    if(m>=10){
        clearInterval(kq);
    }
}

var kq = setInterval(insochan, 100);

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
var kq2 = setInterval(insongto, 30);