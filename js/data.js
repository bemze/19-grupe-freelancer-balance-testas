const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const menesiai = [ 'sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis']
const DOM = document.querySelector('.table-content');
let HTML ='';
for (let i = 0; i < menesiai.length; i++) {
    const data = menesiai.length[i];
    
    HTML += ` <div class="table-row">
    <div class="cell">1</div>
    <div class="cell">${data}</div>
    <div class="cell">150</div>
    <div class="cell">-</div>
    <div class="cell">150.00 Eur</div>
    </div>`;
}
    DOM.innerHTML = HTML;
console.log(HTML);
