
// plaatst tektst met gekozen kleur in scherm
function colorText(tekst) {
    document.getElementById("colorChoice").innerHTML = `De door U gekozen kleur is: ${tekst}`;
};

// activeert reactie op muis beweging
function mouseEventMenuOn(){
    document.getElementById("menu").addEventListener("mouseenter", mouseEnter);
    document.getElementById("menu").addEventListener("mouseleave", mouseLeave);
};

// de-activeerd reactie op muis beweging
function mouseEventMenuOf(){
    document.getElementById("menu").removeEventListener("mouseenter", mouseEnter);
    document.getElementById("menu").removeEventListener("mouseleave", mouseLeave);
};

// maakt keuze menu zichtbaar bij mouse-enter
function mouseEnter(){
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    getSideBarUl.style.visibility = "visible"; 
    uitklap();   
};

// maakt menu onzichtbaar bij mouse-leaf
function mouseLeave(){
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    inklap(); 
    getSideBarUl.style.visibility = "hidden";
   
};
 
// maakt menu zichtbaar bij muisklik

function clicked(){
    mouseEventMenuOf();
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    getSideBarUl.style.visibility = "hidden";
    toggleNav();
};

function toggleNav() {      
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    if (getSideBarUl.style.visibility === "visible") {
        getSideBarUl.style.visibility = "hidden";
        inklap();
    }
    else {
        getSideBarUl.style.visibility = "visible";        
    }   
};

// zet bij opstart de radio-button op checked in de default-kleur
radioButtonChecked(1);

function uitklap(){
let uit = document.querySelector(".nav-sidebar ul");
    uit.style.width = "200px";    
};

function inklap(){
    let inklap = document.querySelector(".nav-sidebar ul");
    inklap.style.width = "0px";
};


document.querySelector("#btn0").addEventListener("click", function(e){
    document.body.style.backgroundColor = "#ece3e3";   
    radioButtonChecked(1);
    colorText("licht-grijs");
    toggleNav();
    mouseEventMenuOn();
});

document.querySelector("#btn1").addEventListener("click", function(e){
    document.body.style.backgroundColor = "aqua";
    radioButtonChecked(2);
    colorText( "licht-blauw'");
    toggleNav();
    mouseEventMenuOn();
});

document.querySelector("#btn2").addEventListener("click", function(e){
    document.body.style.backgroundColor = "green";
    radioButtonChecked(3);
    colorText("groen");
    toggleNav();
    mouseEventMenuOn();
});

document.querySelector("#btn3").addEventListener("click", function(e){
    document.body.style.backgroundColor = "orange";
    radioButtonChecked(4);
    colorText("oranje");
    toggleNav();
    mouseEventMenuOn();
});

document.querySelector("#btn4").addEventListener("click", function(e){
    document.body.style.backgroundColor = "purple";
    radioButtonChecked(5);
    colorText("paars");
    toggleNav();
    mouseEventMenuOn();
});

document.querySelector("#btn5").addEventListener("click", function(e){
    document.body.style.backgroundColor = "red";
    radioButtonChecked(6);
    colorText("rood");
    toggleNav();
    mouseEventMenuOn();
});

// zet betreffende radio-button op checked
function radioButtonChecked(number){
var knop = ["knop1","knop2","knop3","knop4","knop5","knop6"];
radiobtn = document.getElementById(knop[number-1]);
    radiobtn.checked = true;
};

document.getElementById("menu").addEventListener("mouseenter", mouseEnter);
document.getElementById("menu").addEventListener("mouseleave", mouseLeave);
document.getElementById("menu").addEventListener("click",clicked);

// verwerking toetsenbord aanslag nummers 1-6
document.addEventListener('keypress', logKey);
function logKey(e) {
   var aanslag    = `${e.code}`;
   var digit      =["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"];
   var btn        =["#btn0","#btn1","#btn2","#btn3","btn4","#btn5"];
   var bckgrndclr =["#ece3e3","aqua","green","orange","purple","red"];
   var clrTxt     =["licht-grijs","licht-blauw","groen","oranje","paars","rood"];

   for (i=0; i<=5 ; i++){
       if(aanslag === digit[i]){
           document.querySelector(btn[i]);
           document.body.style.backgroundColor = bckgrndclr[i];
           colorText(clrTxt[i]);
           radioButtonChecked(i+1);
       }
   }
};    

   