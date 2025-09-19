var y = 1;
var werd1 = document.getElementById("khat1");
var werd2 = document.getElementById("khat2");
var werd3 = document.getElementById("khat3");
var werd4 = document.getElementById("khat4");
var btn = document.querySelector("#complete");
var comp = document.getElementById("comp");
var again = document.getElementById("again");
var day = document.getElementById("d1")
var werd5 = document.getElementById("khat5")
var icon = document.getElementById("menu")
var sec = document.getElementById("sec")
var wrong = document.getElementById("wrong")
var n = 1
// sec.style.display = 'none'




icon.addEventListener('click' , function(){
       sec.style.display = 'block'
    n++
    if(n == 2){
        icon.addEventListener('click',function(){
            sec.style.display =  'none'
            n--
        })
    }
})
 



// wrong.addEventListener('click',function(){
//     sec.style.display = 'none'
//     icon.style.display = 'block'
// })

werd1.style.display = "block";
again.style.display = "none";

function count(){
   
    if (y == 1){
        werd1.style.display = "none";
        werd2.style.display = "block";
        y++
        day.innerText = 'اليوم 2';
        window.localStorage.day = "اليوم 2"
    }
    else if (y == 2){
        werd2.style.display = "none";
        werd3.style.display = "block";
        y++
        day.innerText = 'اليوم 3';
    }

    else if (y == 3){
        werd3.style.display = "none";
        werd4.style.display = "block";
        y++
        day.innerText = 'اليوم 4';
    }
    else{
        werd4.style.display = 'none';
        btn.style.display = 'none';
        werd5.style.display = "block";
        werd5.style.right = '50px';
        again.style.display = 'block';

    }


}

function count2(){

    y = 1; 
    werd1.style.display = "block";
    werd2.style.display = "none";
    werd3.style.display = "none";
    werd4.style.display = "none";
    werd5.style.display = "none"; 
    btn.style.display = "inline-block"; 
    day.innerText = "اليوم 1"; 
    again.style.display = "none"; 



}


btn.addEventListener("click",count)
again.addEventListener("click",count2)


