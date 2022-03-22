let TodayMoney=0;//현재 넣은돈

let coffe = document.getElementById('coffe');
let corn = document.getElementById('corn');
let water = document.getElementById('water');
//let product = document.getElementsByClassName('btn');

let big = document.getElementById('1000')
let middle = document.getElementById('500');
let small = document.getElementById('100');

//동일
let product={
    price:[700,1000,500],
    product4:["coffe","corn","water"]
};
product.product4[0]=document.getElementById('coffe');
product.product4[1]=document.getElementById('corn');
product.product4[2]=document.getElementById('water');
/*
product.price[0]=document.getElementById('1000');
product.price[1]=document.getElementById('500');
product.price[2]=document.getElementById('100');*/
//동일


//let product = ['coffe','corn','water'];

coffe.onclick=function sumCoffe(){
    if(700<=TodayMoney){
    TodayMoney-=700;
    alert("커피를 샀다");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
    }
    else{
        alert("돈이 부족하다.");
    }
}
corn.onclick=function sumCorn(){
    if(1000<=TodayMoney){
    TodayMoney-=1000;
    alert("옥수수수염차를 샀다.");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
    }
    else{
        alert("돈이 부족하다.");
    }
}
water.onclick=function sumWater(){
    if(500<=TodayMoney){
        TodayMoney-=500;
        alert("물을 샀다.");
        document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
        }
        else{
            alert("돈이 부족하다.");
        }
    }

big.onclick=function sumBig(){
    TodayMoney+=1000;
    alert("1000원 넣었다");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
    changeColor();
}
middle.onclick=function sumMiddle(){
    TodayMoney+=500;
    alert("500원 넣었다");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
    changeColor();
}
small.onclick=function sumSmall(){
    TodayMoney+=100;
    alert("100원 넣었다");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
    changeColor();
}


changeColor();

function changeColor() {
    for (let i = 0; i < 3; i++) {
        if (product.price[i] > TodayMoney) {
            product.product4[i].style.color = "red"; // [1]=coffee=>red
        }
        else if (product.price[i] <= TodayMoney) {
            product.product4[i].style.color = "blue";
        }
    }
}

