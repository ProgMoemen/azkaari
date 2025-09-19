var morning = document.getElementById("morn");
var night = document.getElementById("nig");
var afterPray = document.getElementById("pray");
var sleep = document.getElementById("slp");
var afterWakeUp = document.getElementById("wkup");
var choosed = document.getElementById("choosed")
var morningAzkar = document.getElementById('mor');
var nightgAzkar = document.getElementById('night');
var prayAzkar = document.getElementById("aPray");
var sleepAzkar = document.getElementById("sleep");
var wakwUpAzkar = document.getElementById("wkupA");
var choose = document.getElementById("choose");
var bod = document.querySelector("body");
var btns = document.getElementsByClassName("btn");
var add = document.getElementById("add-section")
var inp1 = document.getElementById("inp1")
var inp2 = document.getElementById("inp2")
var btn2 = document.getElementById("btn2") // add 
var btn3 = document.getElementById("close-form") // close 
var btn1 = document.getElementById("add-btn")


    morningAzkar.style.display = "block";
    nightgAzkar.style.display = 'none';
    prayAzkar.style.display = 'none';
    sleepAzkar.style.display = 'none';
    wakwUpAzkar.style.display = 'none';
    choose.style.display = 'none';
    btn1.style.display = 'none';

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var num = Number(this.innerText);
        if (num > 0) {
            num--;;
        }
        this.innerText = String(num).padStart(2, "0");
    });
}
morning.addEventListener('click', function(e){
    morningAzkar.style.display = "block";
    nightgAzkar.style.display = 'none';
    prayAzkar.style.display = 'none';
    sleepAzkar.style.display = 'none';
    wakwUpAzkar.style.display = 'none';
    choose.style.display = 'none';
    e.preventDefault()    
})
night.addEventListener('click', function(e){
    nightgAzkar.style.display = 'block';
    morningAzkar.style.display = 'none';
    prayAzkar.style.display = 'none';
    sleepAzkar.style.display = 'none';
    wakwUpAzkar.style.display = 'none';
    choose.style.display = 'none';
    e.preventDefault()
})
afterPray.addEventListener('click', function(e){
    nightgAzkar.style.display = 'none';
    morningAzkar.style.display = 'none';
    prayAzkar.style.display = 'block';
    sleepAzkar.style.display = 'none';
    wakwUpAzkar.style.display = 'none';
    choose.style.display = 'none';
    e.preventDefault()
})
sleep.addEventListener('click', function(e){
    nightgAzkar.style.display = 'none';
    morningAzkar.style.display = 'none';
    prayAzkar.style.display = 'none';
    sleepAzkar.style.display = 'block';
    wakwUpAzkar.style.display = 'none';
    choose.style.display = 'none';
    e.preventDefault()
})
afterWakeUp.addEventListener('click', function(e){
    nightgAzkar.style.display = 'none';
    morningAzkar.style.display = 'none';
    prayAzkar.style.display = 'none';
    sleepAzkar.style.display = 'none';
    wakwUpAzkar.style.display = 'block';
    choose.style.display = 'none';
    e.preventDefault()
})
choosed.addEventListener('click', function(e){
    e.preventDefault()
    nightgAzkar.style.display = 'none';
    morningAzkar.style.display = 'none';
    prayAzkar.style.display = 'none';
    sleepAzkar.style.display = 'none';
    wakwUpAzkar.style.display = 'none';
    choose.style.display = 'block';
    btn1.style.display = ' block'
})


btn1.addEventListener('click' , function(e){
    add.style.display = 'block';
    e.preventDefault()
})
btn2.addEventListener("click", function(e){
    val1 = inp1.value
    val2 = Number(inp2.value)
    if (isNaN(val2) || val2 <= 0 || val2 >= 1000){
        alert(" من فضلك أدخل عدد صحيح أكبر من الصفر وأقل من 1000" )
        return;
    }
    var mydiv = document.createElement("div")
    mydiv.classList.add("zekr")
    var myDiv2 = document.createElement('div')
    myDiv2.classList.add("btns")
    var newBtn = document.createElement("button")
    newBtn.classList.add("btn")
    var div3 = document.createElement('div')
    div3.classList.add('txt')
    var p1 = document.createElement('p')
    p1.classList.add('zekr')
    p1.innerText = val1
    var hr = document.createElement('hr')
    choose.append(mydiv)
    mydiv.append(myDiv2)
    myDiv2.append(newBtn)
    mydiv.append(div3)
    div3.append(p1)
    mydiv.append(hr)
    newBtn.innerText = String(val2).padStart(2,"0");
    add.style.display = 'none';
    e.preventDefault()
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var num = Number(this.innerText);
        if (num > 0) {
            num--;;
        }
        this.innerText = String(num).padStart(2, "0");
    });
}
    inp1.value = ""
    inp2.value = ""
})
btn3.addEventListener('click', function(e){
    add.style.display = 'none';
    e.preventDefault()

})
