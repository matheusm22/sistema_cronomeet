var seg=0;
var min=0;
var hr=0;
var on= 0;
var res= document.getElementById('res');

var interval

 var nome = prompt('Qual é o seu nome??')
  if (nome == '' || nome == null) {
    window.location.href = "/erro.html"

  } 


                  
    
function twoDigits(digit){
    if(digit<10){
        return('0'+ digit)
    }else{
        return(digit)
    }
}

function start(){
    if(on == 0){
    on ++
    watch()
    interval = setInterval(watch,1000)
}

document.addEventListener("keypress", function(e) {
    if(e.key === 32) {
    
        var btn = document.querySelector("#start");
      
      btn.click();
    
    }
  });

}

function pause(){
    clearInterval(interval)
    on = 0;
}


function reset(){
    var r=confirm("Deseja realmente zerar o crônometro?");
 if (r==true) {
    clearInterval(interval)
    seg=0
    min=0
    hr=0;
    on = 0
   document.getElementById('watch').innerText='00:00:00'
 }
}

function watch(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min== 60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(seg)
}

var s  = document.getElementById('start')
var p  = document.getElementById('pause')
var r = document.getElementById('reset')

s.addEventListener('click', clicarS)
p.addEventListener('click', clicarP)
r.addEventListener('click', clicarR)

function clicarS(){
    document.getElementById('res').innerText='Clique em "pausar" para ver a hora atual.'
     
    document.getElementById('start').onmouseout = function() {
        s.textContent = 'Iniciar';
    }
     }


function clicarP(){
    let horalocal = new Date().toLocaleTimeString('pt-br');
    let datalocal = new Date().toLocaleDateString('pt-br');
    res.innerHTML = ` Horario atual: ${horalocal} ${datalocal}`;

    document.getElementById('pause').onmouseout = function() {
        s.textContent = 'Retomar';
    }
}
 
function clicarR(){
    document.getElementById('res').innerText='Clique em "pausar" para ver a hora atual.'
    
    document.getElementById('reset').onmouseout = function() {
        s.textContent = 'Iniciar';
    }

 } 