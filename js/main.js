

var tablinks = document.getElementsByClassName("tab-links");
var tacontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-links")
    }
    for(let tacontent of tacontents){
        tacontent.classList.remove("active-tab")
    }
    Event.currentTarget.classList.add("active-links");
    document.getElementById("tabname").classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-30vw"
}