let operand1=0;
let operand2=0;
let operator="+";
let call=(op1=0,a,op2=0)=>{
    op1=Number(op1);
    op2=Number(op2);
    const expr=a;
    let ans=0;
    switch(expr){
        case "+":
            //Perform addition and updating operand1 for next operation
            ans=op1+op2;
            operand1=ans;
            operand2=0;
            return ans;
        case "-":
            //Perform division and updating operand1 for next operation
            ans=op1-op2;
            operand1=ans;
            operand2=0;
            return ans;
        case "*":
            //Perform multiplication and updating operand1 for next operation
            ans=op1*op2;
            operand1=ans;
            operand2=0;
            return ans;
        case "/":
            //Perform division and updating operand1 for next operation
            ans=op1/op2;
            operand1=ans;
            operand2=0;
            return ans;
        case "C":
            return 0;
        default:
            //If nothing happens then return 0
            return 0;
    }
};

function addingListenerToObject(obj,elem){
    obj.onclick=f1=()=>{
        if(elem>="0" && elem<="9"){
            if(operand1==0){
                operand1=elem;
            } 
            else {
                operand2=elem;
            }
        }
        else if(elem=="*" || elem=="/"|| elem=="-"|| elem=="+" ){
            operator=elem;
            let val=call(operand1,operator,operand2);
        }
        else if(elem=="=" ){
            const h1=document.getElementsByTagName("h1")[0];
            let val=call(operand1,operator,operand2);
            h1.innerHTML=val.toString();
        }
        else if(elem=="C"){
            operand1=0;
            operand2=0;
            const h1=document.getElementsByTagName("h1")[0];
            let val=Number(0);
            h1.innerHTML=val.toString();
        }
    }
}

let s=Array.from(document.getElementsByTagName("button"));
for(i of s){
    addingListenerToObject(i,i.innerHTML);
}
