/* const buttons=document.querySelectorAll("button");
const display=document.querySelector("pre");

buttons.forEach(function (button){
    button.addEventListener("click",function(e){
        handleclick(e.target);
    });
});
const output=document.getElementById("display");
const op=document.getElementById("op");
let prevnumvalue=0;
let currentnumvalue=0;
let operation=null;
let operationspan=document.getElementById("op");
function setoperationtype(op){
  if(operation!==null){
      executeoperation();
  }
  operation=op;
  operationspan.textContent=op;
  prevnumvalue=parseFloat(output.textContent);
  output.textContent="0";

}

function executeoperation(){
  currentnumvalue=parseFloat(output.textContent);
  switch(operation){
      case "+":currentnumvalue = prevnumvalue + currentnumvalue;
              break;
      case "-":currentnumvalue=prevnumvalue - currentnumvalue;
              break;
      case "x":currentnumvalue=prevnumvalue * currentnumvalue;
              break;
      case "/":currentnumvalue=prevnumvalue / currentnumvalue;
              break;
      
      
      
  }
  console.log(currentnumvalue);
  prevnumvalue=0;
  output.textContent=currentnumvalue.toString().slice(0,9);
}
function typetodisplay(buttonclicked){
    if(output.textContent==="0"){
        output.textContent=buttonclicked;
    }
    else{
    if(buttonclicked==="."){
        if(output.textContent.includes(".")){
            return;
        }else output.textContent +=".";
    }else output.textContent +=buttonclicked;
}
display.textContent=prevnumvalue.toString();
}



function handleoperations(buttonclicked){
    switch(buttonclicked){
        case "C": output.textContent="0";
                    prevnumvalue=0;
                    currentnumvalue=0;
                    operation=null;
                    display.textContent="";
                    operationspan.textContent="";
                    break;
        case "=":executeoperation();
                display.textContent="";
                operationspan.textContent="";
                break;
        default :setoperationtype(buttonclicked);
                break;
    }
} 

function handleclick(clicked){
    const buttonclicked=clicked.textContent;
    if(!isNaN(buttonclicked) || buttonclicked==="."){
        typetodisplay(buttonclicked);
    }
    else if(/\D/.exec(buttonclicked)){
        handleoperations(buttonclicked);
    }
} */
const buttons = document.querySelectorAll("button");
const output=document.querySelector("h3");
let operation=null;
let firstnum=null;
let secondnum=null;

buttons.forEach(function (button){
  button.addEventListener("click",function(e){
    handleclick(e.target);
  });

});
function typetodisplay(buttontype){
  if(output.textContent==="0"){
    output.textContent=buttontype;
  }else{
  if(buttontype==="."){
    if(output.textContent.includes(".")){
      return;
    }else output.textContent +=".";
  }else output.textContent += buttontype;
}
}
function Setoperation(op){
  if(operation!=null){
    executeop();
  }
  operation=op;
   secondnum=parseFloat(output.textContent);
  output.textContent="0";
}
function executeop(){
  firstnum=parseFloat(output.textContent);
  debugger;
    switch(operation){
      
      case "+":firstnum=firstnum + secondnum;
              break;
      case "-":firstnum=firstnum - secondnum;
              break;
      case "x":firstnum=firstnum * secondnum;
              break;
      case "/":firstnum= secondnum / firstnum;
              
              break;
      
    }
    console.log(firstnum);
    secondnum=0;
    output.textContent=firstnum.toString();
}
function handleoperation(buttontype){
  switch(buttontype){
    case "C": output.textContent=0;
              firstnum=null;
              secondnum=null;
              operation=null;
              break;
    case "=":executeop();
              break;
    default: Setoperation(buttontype);
              break;
  }
}


function handleclick(clickinfo){
  
  let buttontype=clickinfo.textContent;
if(!isNaN(buttontype) || buttontype==="."){
     typetodisplay(buttontype);  
}
else{
  handleoperation(buttontype);
}
}

  
