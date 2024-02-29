var defStyle = window.getComputedStyle(document.getElementById("text"));
//var big = False;
function Big(){
    //alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24px";
} 


function radio(){
    var obj = document.getElementById("text");
    //alert("Hello, world!");
    if(document.getElementById("fancy").checked){
        obj.style.fontWeight = "bold";
        obj.style.color = "blue";
        obj.style.textDecoration = "underline";
    }
    else if (document.getElementById("boring").checked) {
        obj.style = defStyle;
    }    
    
}

function Moo(){
    var obj = document.getElementById("text");
    obj.value = obj.value.toUpperCase();    
    var parts = obj.value.split(".");  // ["How", "are", "you?"]
    obj.value = parts.join("-MOO.");       // "How_are_you?"
}

