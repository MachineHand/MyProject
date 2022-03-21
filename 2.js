let product;
let TodayMoney=0;//현재 넣은돈

let coffe = document.getElementById('coffe');
let corn = document.getElementById('corn');
let water = document.getElementById('water');

let big = document.getElementById('1000')
let middle = document.getElementById('500');
let small = document.getElementById('100');

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
}
middle.onclick=function sumMiddle(){
    TodayMoney+=500;
    alert("500원 넣었다");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
}
small.onclick=function sumSmall(){
    TodayMoney+=100;
    alert("100원 넣었다");
    document.getElementById("money").innerHTML="현재금액: "+TodayMoney;
}

let TodayMoney1 = TodayMoney;
