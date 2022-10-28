let btn = document.querySelector("#nao");
btn.addEventListener("mouseenter", newPosition);

let clk = document.querySelector("#sim");
clk.addEventListener("click", alerta);

function alerta(){
    window.alert("Vai rolar C#, Python, JavaScript e Muito Mais!")
}

let pos = 1
function newPosition(){
    
    
    switch(pos){
        case 1:
            btn.setAttribute("class", "novaposicao1");
            break;
        
        case 2:
            btn.removeAttribute("class", "novaposicao1");
            btn.setAttribute("class", "novaposicao2");
            break;

        case 3:
            btn.removeAttribute("class", "novaposicao2");
            btn.setAttribute("class", "novaposicao3");
            break;
        
        case 4:
            btn.removeAttribute("class", "novaposicao3");
            btn.setAttribute("class", "novaposicao4");
            break;

        case 5:
            btn.removeAttribute("class", "novaposicao4");
            btn.setAttribute("class", "novaposicao5");
            break;

        case 6:
            btn.removeAttribute("class", "novaposicao5");
            btn.setAttribute("class", "default");
            break;        
        }

        pos++;    
    
        if (pos === 7){
            pos = 1;
        }
console.log(pos)
    
    
   // let arr = document.querySelectorAll('.novaposicao1', '.novaposicao2', '.novaposicao3');
   // nova = Array.from(arr)   
    
   //console.log(nova.length);
   // 

       
}


