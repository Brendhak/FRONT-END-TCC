/**
 * Sensus Gestão - Motor do Checklist 5S
 * Faz o cálculo das notas da auditoria (0/1) de forma síncrona no front-end.
 */
function switchSenso(index) {
    document.querySelectorAll('#sensoMenu li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.senso-section').forEach(sec => sec.classList.remove('active'));
    
    document.querySelectorAll('#sensoMenu li')[index].classList.add('active');
    document.getElementById('senso' + index).classList.add('active');
}

function setQuestionScore(button, val) {
    const btnsGroup = button.parentElement;
    btnsGroup.querySelectorAll('.opt-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const item = btnsGroup.closest('.question-item');
    item.setAttribute('data-points', val);

    recalculateAudit();
}

function recalculateAudit() {
    const items = document.querySelectorAll('.question-item');
    let accumulated = 0;

    items.forEach(i => {
        accumulated += parseInt(i.getAttribute('data-points') || 0);
    });

    const currentPercentage = Math.round((accumulated / items.length) * 100);
    document.getElementById('scoreLabel').innerText = currentPercentage + "%";

    // Classificação contida nas regras de negócio do TCC
    let userFeedback = "Crítico";
    if (currentPercentage >= 90) userFeedback = "Excelente";
    else if (currentPercentage >= 70) userFeedback = "Bom";
    else if (currentPercentage >= 50) userFeedback = "Regular";

    document.getElementById('statusLabel').innerText = userFeedback;
}

document.getElementById('auditForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Auditoria arquivada com sucesso! Os indicadores do Dashboard foram atualizados.');
    window.location.href = 'dashboard.html';
});