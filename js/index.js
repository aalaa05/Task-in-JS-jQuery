
/*==================================================================
                         Work TO - DOS  
==================================================================*/

let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");

let itemsList;

addBtn.addEventListener("click", addItem);

if (localStorage.getItem("Items") == null) {
    itemsList = [];
} else {
    itemsList = JSON.parse(localStorage.getItem("Items"));
    dispayItems(itemsList);
}

function addItem() {
    var item =
    {
        itemName: itemInput.value,
    };
    itemsList.push(item);
    localStorage.setItem("Items", JSON.stringify(itemsList));// trasnform JSON TO String
    // clearData();
    dispayItems(itemsList);
}

function dispayItems(itemsList) {
    let cartona = ``;
    for (let i = 0; i < itemsList.length; i++) {

        cartona += `

        <div class ="row bg-light my-2 ">
        <div class="col-md-3">
            <h4> ${itemsList[i].itemName}</h4>
        </div>
        <div class="col-md-8">
        </div>
        <div class="col-md-1">
            <button class="btn btn-danger" onclick="deleteItem(${i})">X</button>
        </div>
        </div>
            `
    }
    document.getElementById("itemsDemo").innerHTML = cartona;
}

function deleteItem(index) {
    itemsList.splice(index, 1);
    localStorage.setItem("Items", JSON.stringify(itemsList));
    dispayItems(itemsList);
}


/*==================================================================
                        HUSTLINE(Audio)   
==================================================================*/


let hustlineDive = document.getElementById("hustlineDive");
let hustline = document.getElementById("hustline");


hustlineDive.addEventListener("mouseover", changeColor);

hustlineDive.addEventListener("mousemove", () => {
    $("#hustline").css("backgroundColor", "#fff");
    console.log("Clear Interval");
    clearInterval(x)
});




function changeColor() {
    let randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);

    var x = setInterval(() => {
        $('#hustline').css({
            'backgroundColor': randomColor,
        })
        document.getElementById("audioPlay").play();
    }, 500);

};





/*==================================================================
                        CountDown Timer   
==================================================================*/

let timer = document.getElementById("timer");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let countDownDate = new Date("Oct 1, 2020 15:37:25").getTime();


let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d + "d ";
    hours.innerHTML = h + "h ";
    minutes.innerHTML = m + "m ";
    seconds.innerHTML = s + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "EXPIRED";
    }
}, 1000);


/*==================================================================
                        R G B 
==================================================================*/


$(".redDiv").hover(function () {
    $("#rbg").css("backgroundColor", "red");
});

$(".greenDiv").hover(function () {
    $("#rbg").css("backgroundColor", "green");
});

$(".blueViv").hover(function () {
    $("#rbg").css("backgroundColor", "blue");
});

$(".redDiv,.greenDiv,.blueViv").mouseleave(function () {
    $("#rbg").css("backgroundColor", "#fff");
});