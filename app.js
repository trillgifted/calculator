function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}



function operate(num1,num2,operator){
    let nnum1,nnum2 
    
    
    nnum1= parseFloat(num1);
    nnum2=parseFloat(num2);

    
    
    if(operator=="+"){
        return add(nnum1,nnum2);
    } 
    
    if(operator=="-"){
        return subtract(nnum1,nnum2);
    }  
    
    if(operator=="*"){
        return multiply(nnum1,nnum2);
    } 

    if(operator=="/"){
        if(nnum2==0){
            return "CAN'T DIVIDE BY ZERO";
        }
        return divide(nnum1,nnum2);
    } 
}

function display(){
    const digitBtns = document.querySelectorAll('.digit');
    const windowDisplay = document.querySelector('.window');
    const operators = document.querySelectorAll(".operators");
    const equalBtn = document.querySelector(".equal");
    const clear = document.querySelector('.clear');
    let zeroStart=true;
    let clickedOp=false;
    
    let clickEqual=false;
    var num1="";
    var num2="";
    let saveOp="";
    let ans=0;
    var dotChecker = false;

    window.addEventListener('keydown',(event)=>{
        let opps=["/","*","+","-"];
        let allow = ["/","*","+","-",'1','2','3','4','5','6','7','8','9'];

        if(allow.includes(event.key)==false){
            return;
        }
        
        
        
        
        if(opps.includes(event.key)){
            zeroStart=true;
            if(clickedOp==false){
                clickedOp=true; 
            }else{
                clickedOp=false;    
            }

            saveOp=event.key;
            return;
        }
        
        
        if(clickedOp && event.key=="."){
            return;
        }
        
        if(zeroStart==true){
            windowDisplay.textContent="";
            zeroStart=false;
        }
        
        if(clickedOp){
            for(let i=0;i<10;i++){
                if(event.key == i){
                    windowDisplay.textContent+=i.toString();
                    num2+=i.toString();
                }
            }
            console.log("num2:"+ num2);
            
            return;
        }
    
        
        for(let i=0;i<10;i++){
            if(event.key == i){
                windowDisplay.textContent+=i.toString();
                num1+=i.toString();
            }
        }
        
             
    })




    digitBtns.forEach(digit=>{
        digit.addEventListener('click',()=>{
           if(dotChecker && digit.textContent=="."){
               return;
           } 
            
            // if(clickedOp && digit.textContent=="."){
            //     return;
            // }
            if(zeroStart==true){
                windowDisplay.textContent="";
                zeroStart=false;
            }



            if(digit.textContent=="."){
                dotChecker=true;
            }
            if(clickedOp){
                windowDisplay.textContent+=digit.textContent;
                num2+=digit.textContent;
                console.log("num2:"+ num2);
                
                return;
            }
            
            

            
            if(clickEqual){
                windowDisplay.textContent="";
                num1="";
                clickEqual=false;
            }
            
                windowDisplay.textContent+=digit.textContent;
                num1+=digit.textContent;
            
            console.log("num1:"+ num1);

        })    
    })


    operators.forEach(operator=>{
        operator.addEventListener('click',()=>{
            dotChecker=false;

            zeroStart=true;
            if(clickedOp==false){
                clickedOp=true; 
            }else{
                clickedOp=false;    
            }

            saveOp=operator.textContent
            if(operator.textContent=='x'){
                saveOp="*";
            }
            if(operator.textContent=='÷'){
                saveOp="/";
            }
               
        }) 
          
    })

    equalBtn.addEventListener('click',()=>{
        ans=0;
        dotChecker=false;
        if(operate(num1,num2,saveOp)=="CAN'T DIVIDE BY ZERO"){
            windowDisplay.textContent="CAN'T ÷ BY 0";
            num1="";
            num2="";  
            zeroStart=true;
            clickedOp=false; 
            return;
        }
        ans+=operate(num1,num2,saveOp);
        windowDisplay.textContent=ans.toString();
        console.log("ans: "+ ans);
        num1=ans.toString();
        num2="";
        
        clickedOp=false;
        clickEqual=true;
        

        
    });

    clear.addEventListener('click',()=>{
        windowDisplay.textContent="0";
        num1="";
        num2="";
        zeroStart=true;
        clickedOp=false;
    })

   
    
}

display();
