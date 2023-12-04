const mainDiv = document.getElementById("main");


function generateElement(placeholder,inputType,btnText,txtId){
const d1 = document.createElement("div");
const t1 = document.createElement("input");
const b1 = document.createElement("button");

d1.setAttribute("class","input-group mb-3");

t1.setAttribute("type",inputType);
t1.setAttribute("class","form-control");
t1.setAttribute("placeholder",placeholder);
t1.setAttribute("id",txtId)

b1.setAttribute("class","btn btn-outline-secondary");
b1.setAttribute("type","button");
b1.innerText = btnText ;


d1.appendChild(b1);
d1.appendChild(t1);

mainDiv.appendChild(d1);
}
generateElement("Enter Width","number","Width","width");
generateElement("Enter Height","number","Height","height");
generateElement("color","color","Bgcolor","bgclr");
generateElement("Enter Border Radius","number","B-Radius","brad");
generateElement("Enter Border width","number","B-Width","bwid");
generateElement("Enter Border Variant","text","B-variant","bvar");
generateElement("Color","color","Enter color","entclr")

function handleSubmit(){
const objw=document.getElementById("width").value;
const objh=document.getElementById("height").value;
const objbgclr=document.getElementById("bgclr").value;
const objbrad=document.getElementById("brad").value;
const objbwid=document.getElementById("bwid").value;
const objbvar=document.getElementById("bvar").value;
const objentclr=document.getElementById("entclr").value;

document.getElementById("show").style.width=objw+"px";
document.getElementById("show").style.height=objh+"px";
document.getElementById("show").style.backgroundColor=objbgclr;
document.getElementById("show").style.borderRadius=objbrad+"px";
document.getElementById("show").style.border=`${objbwid}px ${objbvar} ${objentclr} `
}
const btn1 = document.createElement("button");
btn1.setAttribute("class","btn btn-warning");
btn1.setAttribute("onclick","handleSubmit()");
btn1.innerText= "Submit"

const btn2 = document.createElement("button")
btn2.setAttribute("class","btn btn-danger")
btn2.innerText="Cancel"

mainDiv.appendChild(btn1)
mainDiv.appendChild(btn2)

mainDiv.appendChild(d2);