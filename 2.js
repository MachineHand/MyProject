let TodayMoney=0;//현재 넣은돈

let coffe = document.getElementById('coffe');
let corn = document.getElementById('corn');
let water = document.getElementById('water');
//이걸 배열로 만들기->product.product4

let big = document.getElementById('1000')
let middle = document.getElementById('500');
let small = document.getElementById('100');
//이것에 값 집어넣기 ex) big = 1000;


let product={
    clientMoney:[1000,500,100],
    price:[700,1000,500],
    product4:["coffe","corn","water"]//문자 빼도 됨.보기 쉽게 하기위해.
};

product.product4[0]=document.getElementById('coffe');
product.product4[1]=document.getElementById('corn');
product.product4[2]=document.getElementById('water');
/*
product.price[0]=document.getElementById('1000');
product.price[1]=document.getElementById('500');
product.price[2]=document.getElementById('100');*/
//동일

// 


coffe.onclick=function sumCoffe(){
    TodayMoneyCompare(0,"커피");
}
corn.onclick=function sumCorn(){
    TodayMoneyCompare(1,"옥수수수염차");
}
water.onclick=function sumWater(){
    TodayMoneyCompare(2,"물");  
}


big.onclick=function sumBig(){
    pushMoney(0,"1000")
    changeColor();
}
middle.onclick=function sumMiddle(){
    pushMoney(1,"500")
    changeColor();
}
small.onclick=function sumSmall(){
    pushMoney(2,"100")
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

function TodayMoneyCompare(vlaue, inform) {
    if (product.price[vlaue] <= TodayMoney) {
        TodayMoney -= product.price[vlaue];
        alert(inform + "을(를) 샀다.");
        document.getElementById("money").innerHTML = "현재금액: " + TodayMoney;
        changeColor();
    }
    else {
        alert("돈이 부족하다.");
    }
}//현재돈이 가격보다 크면 사고 현재금액 작성 돈 바꾸기

function pushMoney(cM, money) {
    TodayMoney += product.clientMoney[cM];
    alert(money + "원 넣었다");
    document.getElementById("money").innerHTML = "현재금액: " + TodayMoney;
}//돈 넣고 현재금액 표시 