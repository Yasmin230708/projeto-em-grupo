// ===============================
// CONFIGURAÇÕES
// ===============================


const targetDate = new Date("January 1, 2027 00:00:00").getTime();
const startYear = new Date("January 1, 2026 00:00:00").getTime();
const endYear = targetDate;


// ===============================
// ELEMENTOS
// ===============================


const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-percentage");


const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");


const message = document.getElementById("celebration-message");


// ===============================
// MENSAGENS
// ===============================


const messages = [


"Cada segundo é uma nova oportunidade. ✨",


"O futuro começa pelas decisões de hoje.",


"Grandes conquistas começam com pequenos passos.",


"Não conte apenas os dias. Faça os dias contarem.",


"Seu futuro está sendo construído agora.",


"Persistência supera talento quando o talento não persiste."


];


let currentMessage = 0;


// ===============================
// CONTADOR
// ===============================


function updateCountdown(){


const now = new Date().getTime();


const distance = targetDate - now;


if(distance <= 0){


document.querySelector(".countdown").innerHTML=`


<h1 style="grid-column:1/-1;text-align:center;font-size:70px;color:#4f8cff;">


🎉 FELIZ 2027 🎉


</h1>


`;


message.innerHTML="Que este novo ano seja incrível!";


return;


}


const d=Math.floor(distance/(1000*60*60*24));


const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));


const m=Math.floor((distance%(1000*60*60))/(1000*60));


const s=Math.floor((distance%(1000*60))/1000);


days.textContent=d;


hours.textContent=h.toString().padStart(2,"0");


minutes.textContent=m.toString().padStart(2,"0");


seconds.textContent=s.toString().padStart(2,"0");


}


// ===============================
// DATA E HORA
// ===============================


function updateClock(){


const now=new Date();


currentDate.innerHTML=now.toLocaleDateString("pt-BR");


currentTime.innerHTML=now.toLocaleTimeString("pt-BR");


}


// ===============================
// PROGRESSO DO ANO
// ===============================


function updateProgress(){


const now=new Date().getTime();


const progress=((now-startYear)/(endYear-startYear))*100;


const value=Math.min(100,Math.max(0,progress));


progressBar.style.width=value+"%";


progressText.innerHTML=value.toFixed(2)+"%";


}


// ===============================
// FRASES
// ===============================


function changeMessage(){


currentMessage++;


if(currentMessage>=messages.length){


currentMessage=0;


}


message.innerHTML=messages[currentMessage];


}


setInterval(changeMessage,5000);


// ===============================
// REVELAR AO ROLAR
// ===============================


const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform="translateY(0)";


}


});


});


document.querySelectorAll(".card,.stat-card,.timeline-item,.goal").forEach(el=>{


el.style.opacity="0";


el.style.transform="translateY(40px)";


el.style.transition="1s";


observer.observe(el);


});


// ===============================
// EFEITO NOS CARDS
// ===============================


document.querySelectorAll(".card").forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect=card.getBoundingClientRect();


const x=e.clientX-rect.left;


const y=e.clientY-rect.top;


const rotateY=(x-rect.width/2)/18;


const rotateX=(rect.height/2-y)/18;


card.style.transform=`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;


});


card.addEventListener("mouseleave",()=>{


card.style.transform="perspective(800px) rotateX(0) rotateY(0)";


});


});


// ===============================
// DESTAQUE FINAL
// ===============================


function specialEffects(){


const d=parseInt(days.textContent);


if(d<=100){


document.body.style.background="linear-gradient(135deg,#08131f,#1b0f45)";


}


if(d<=30){


message.innerHTML="Falta menos de um mês para 2027! 🚀";


}


if(d<=10){


message.innerHTML="Estamos quase lá! 🎆";


}


}


setInterval(specialEffects,1000);


// ===============================
// INICIAR
// ===============================


function start(){


updateCountdown();


updateClock();


updateProgress();


setInterval(updateCountdown,1000);


setInterval(updateClock,1000);


setInterval(updateProgress,1000);


}


start();
