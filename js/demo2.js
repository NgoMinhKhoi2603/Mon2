var obj = {
    name: "Nam",
    age: 18,
    tel: "0337776672",
    girlFriends: ['Sofm','Faker'],
    eat: function () {
        console.log(this.name + " dang an mi tom ...");
    }
};
var obj2 = {
    name: "Nam",
    age: 18,
    tel: "0337776672",
    girlFriends: ['Sofm','Faker'],
    eat: function () {
        console.log(this.name + " dang an mi tom ...");
    }
};

console.log(obj.tel);
console.log(obj.girlFriends[1]);
obj.eat();
obj.name = "Huy";
obj.eat();

var a = document.getElementById("abc");
console.log(a.innerText);
var x = 15;
function changeText(){
   // a.innerText = "xin chao cac ban";
    //a.innerHTML = x + "<i> Xin chao cac ban</i>";
    a.style.fontSize = x + "px";
    a.style.color = "pink";
    x++;
    a.classList.add("classnaodo");
    a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText,300);