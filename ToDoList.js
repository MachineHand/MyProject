let checkCount=0;
function ToDoListPlus() {
    let table = document.getElementById('table');
    let tr = document.createElement('tr');//tr 만들고
    for (let i = 0; i < 2; i++) {//두번 반복문 넣어서 td2개 1.체크 2.txt값
        let td = document.createElement('td');
        if (i == 0) {//checkbox만들기
            let checkbox = document.createElement("INPUT");
            checkbox.setAttribute("type", "checkbox");//id=++num 추가해야함
            checkbox.setAttribute("class","checkboxes");
            td.appendChild(checkbox);
            tr.appendChild(td);
        }
        else {//텍스트 값 넣기
            let txtValue = document.getElementById('txt')
            let txtValue1=txtValue.value;
            let txt = document.createTextNode(txtValue1);//.innerHTML
            if (!txtValue1) {
                alert('내용을 입력해주세요.');
                txtValue.focus();
                return false;
                }
            td.appendChild(txt);
            tr.appendChild(td);
        }
    }
    table.appendChild(tr);
}

function SD(){
    let table = document.getElementById('table'); //테이블ID
    let rowLength = table.rows.length-1;//테이블 tr 수 만큼 들어감.
    for (let i = rowLength; i >= 1; i--) {//thead에도 tr이 있어서 건너뛰기
        //let tbody = document.getElementsByTagName('tbody')[i];//tbody[i]가 들어감
        let check=document.getElementsByClassName('checkboxes')[i-1];//check가들어감
        let check1=check.checked;
        if (check1==true){
            table.deleteRow(i);
            //tbody삭제
        }
    }
}


function LD() {
    let table = document.getElementById('table'); //테이블ID
    let rowLength = table.rows.length-1;//테이블 tr 수 만큼 들어감.
    for (let i = rowLength; i >= 1; i--) {//thead에도 tr이 있어서 건너뛰기
        table.deleteRow(i);
        break;
    }
}

function AD() {
    let table = document.getElementById('table'); //테이블ID
    let rowLength = table.rows.length-1;//테이블 tr 수 만큼 들어감.
    for (let i = rowLength; i >= 1; i--) {//thead에도 tr이 있어서 건너뛰기
        table.deleteRow(i);
    }
}


//let ul = document.getElementById('ul');
//함수 밖에서는 먹지 않음
count=0;
function a() {
    let ul = document.getElementById('ul');
    let li = document.createElement('li');
    let exText = document.createTextNode("추가된 li+" + count);
    let txtValue = document.getElementById('txt').value
    let txt = document.createTextNode(txtValue);//.innerHTML
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");//id=++num 추가해야함
    //check.setAttribute("id", "num");//id=++num 추가해야함
    li.appendChild(checkbox);
    li.appendChild(txt);
    //li.innerHTML="추가된 li+"+count;
    li.appendChild(exText);
    ul.appendChild(li);
    count++;
}