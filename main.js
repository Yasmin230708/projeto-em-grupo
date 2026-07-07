 // Configuração das datas alvo
const startOfYear2026 = new Date('January 1, 2026 00:00:00').getTime();
const targetDate2027 = new Date('January 1, 2027 00:00:00').getTime();
const totalYearTime = targetDate2027 - startOfYear2026;

function updateDashboard() {
const now = new Date();
const nowTime = now.getTime();
const difference = targetDate2027 - nowTime;

// 1. ATUALIZAR CONTADOR REGRESSIVO
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const messageElement = document.getElementById('celebration-message');

if (difference <= 0) {
clearInterval(dashboardInterval);
document.querySelector('.countdown-timer').innerHTML = "<h2 style='color:#a78bfa; width:100%; font-size:2.5rem;'>🎉 FELIZ 2027! 🎉</h2>";
messageElement.innerText = "O futuro chegou. Desejamos um ano brilhante!";
document.getElementById('progress-bar').style.width = "100%";
document.getElementById('progress-percentage').innerText = "100%";
return;
}

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);

daysElement.innerText = days < 10 ? '0' + days : days;
hoursElement.innerText = hours < 10 ? '0' + hours : hours;
minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;

// 2. ATUALIZAR RELÓGIO ATUAL (TOPO)
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
document.getElementById('current-date').innerText = now.toLocaleDateString('pt-BR', options);

const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
document.getElementById('current-time').innerText = now.toLocaleTimeString('pt-BR', timeOptions);

// 3. ATUALIZAR BARRA DE PROGRESSO DO ANO
const timePassedInYear = nowTime - startOfYear2026;
let yearPercentage = (timePassedInYear / totalYearTime) * 100;

// Garante que o valor fique entre 0% e 100%
yearPercentage = Math.max(0, Math.min(100, yearPercentage));

document.getElementById('progress-bar').style.width = `${yearPercentage}%`;
document.getElementById('progress-percentage').innerText = `${yearPercentage.toFixed(4)}%`;
}

// Inicializa o dashboard imediatamente
updateDashboard();

// Atualiza a cada 1 segundo
const dashboardInterval = setInterval(updateDashboard, 1000);
                                                       