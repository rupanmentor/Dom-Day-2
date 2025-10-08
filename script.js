//syntax: variablename.addEventListener("event",function)

// Session task 2 color circle:
const circle  = document.createElement("div")
circle.id = "circle";

function elements(tagname,content,attrname,attrvalue){
    const res = document.createElement(tagname);
    res.innerHTML = content;
    res.setAttribute(attrname,attrvalue);
    return res;
}

const division = elements("div","","id","container");
const red = elements("button","red","type","button");
const green = elements("button","green","type","button");
const blue = elements("button","blue","type","button");
const reset = elements("button","reset","type","button");

red.addEventListener("click",()=>{
  circle.style.backgroundColor = "red";
})
green.addEventListener("click",()=>{
  circle.style.backgroundColor = "green";
})
blue.addEventListener("click",()=>{
  circle.style.backgroundColor = "blue";
})
reset.addEventListener("click",()=>{
  circle.style.backgroundColor = "white";
})

division.append(circle,red,green,blue,reset)
document.body.append(division)