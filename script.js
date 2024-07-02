// container calculadora
let calc = document.createElement('div')
calc.setAttribute('class', 'calc')
document.body.appendChild(calc)

let aba = document.createElement('div')
aba.setAttribute('class','aba')
document.body.appendChild(aba)

let btn_gaveta = document.createElement('span')
btn_gaveta.setAttribute('class','btn_gaveta')
btn_gaveta.setAttribute('title','Fechar')
btn_gaveta.innerHTML = '<'
aba.appendChild(btn_gaveta)



// visor
const visor = document.createElement('div')
visor.setAttribute('class','visor')
calc.appendChild(visor)

//variavel de controle
let sinal = false

// botoes de operação
const botoesOp = ['+','-','x','/','=','CL'].map((el,index)=>{
    const classes = ['mais','menos','multiplicar','divir','igualdade','limpar']
    const btnSinal = document.createElement('button')
    btnSinal.setAttribute('class','teclas ' + classes[index])

    btnSinal.addEventListener('click',(evt)=>{
        if(sinal){
            visor.innerHTML += ''
            sinal = true 
        }else if(evt.target.innerHTML == 'x'){
           visor.innerHTML += evt.target.innerHTML = '*'
           sinal = true

        }else if(evt.target.innerHTML == '='){
            visor.innerHTML += ''
            
        }else{ 
            visor.innerHTML += evt.target.innerHTML
            sinal = true
        }
        
    })
    
    btnSinal.innerHTML = el
    return btnSinal
})

// botões Numericos
const divBtn = document.createElement('div')
divBtn.setAttribute('class','divBtn')
calc.appendChild(divBtn)

for( let i = 9; 0 <= i; i--){
    let teclas = document.createElement('button')
    teclas.setAttribute('class','num')
    teclas.setAttribute('class','teclas')
    teclas.innerHTML = i
    divBtn.appendChild(teclas)
}

const btnNum = [...document.querySelectorAll('button')]
btnNum[2].after(botoesOp[0])
btnNum[5].after(botoesOp[1])
btnNum[8].after(botoesOp[2])
btnNum[9].after(botoesOp[3])
btnNum[9].after(botoesOp[4])
btnNum[9].before(botoesOp[5])

btnNum.map((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal = false
        return visor.innerHTML += evt.target.innerHTML
        
    })
})

const igualdade = botoesOp[4].addEventListener('click',(evt)=>{
    let resultado = eval(visor.innerHTML)
    visor.innerHTML = resultado
})

document.querySelector('.limpar').addEventListener('click',(evt)=>{
    visor.innerHTML = ''
})

btn_gaveta.addEventListener('click',()=>{
    calc.classList.toggle('gaveta')
    btn_gaveta.classList.toggle('inverter')

    if(btn_gaveta.getAttribute('title') == 'Fechar'){
        btn_gaveta.setAttribute('title','Abrir')
    }else{
        btn_gaveta.setAttribute('title','Fechar')
    }
    
})