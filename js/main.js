/* funkcija, kuri pades isvengti, kada islaidu nera, t.y minuso zenklas*/

function formatMoney(pinigai){
    /* jei pinigai nera skaicius, grazina -, ir funkcija grazina pinigai + Eur (irasas su tarpu)*/
    if (typeof pinigai !== "number") {
        return '-';
    }
    return pinigai + ' Eur';

}
/* funkcija, kuris isrusiuoja mensius pagal eiliskuma*/

function sortData(list) {

    // list = [10, 1, 3, 7, 2, 5, 9, 4, 6, 11, 8, 12];
    let sortedList = [];   /* kintamasis, kuris grazina tuscia array isrusiuotos medziagos */
    
    sortedList = list.sort(((a, b) => a.month - b.month)) /*ta pati sortinimo funkcija, tik trumpiau.   */ 
    
    // for (let i = 1; i <=12; i++) {             /*koki sk noriu rasti - 1-12*/
    //     for (let k = 0; k < list.length; k++) { /*konkretus sararas*/
    //         if (list[k].income === i) {      /*konkretus palyginimas, jei surandu, ko ieskau, supushinu i list*/
    //             sortedList.push(list[k]);
    //             break;
    //         }
    //     }
    // }

console.log(sortedList);
   
    
return sortedList;
}

function lentelesGeneravimas(menesiuPavadinimai, pinigine) {
    let HTML = '';
    /* balanso skaiciavimas*/
    balance = 0;
    income = 0;
    expense = 0;

    pinigine = sortData(pinigine);   /*piniginis balansas issikviecia jau isrusiuota savo paties balansa eiles tvarka*/

    for(let i = 0; i < pinigine.length; i++) {
        const item = pinigine[i];
        income += item.income ? item.income : 0;
        expense += item.expense ? item.expense : 0;
        balance = income - expense;
        /*menesiuPavadinimai[item.month-1] -1, nes sarsae yra 1-12sk, JS skaiciuoja 0-11, todel paskutis menuo - undefined*/ 
        HTML += ` <div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${menesiuPavadinimai[item.month-1]}</div> 
                    <div class="cell">${formatMoney(item.income)}</div>
                    <div class="cell">${formatMoney(item.expense)}</div>
                    <div class="cell">${balance}</div>
                 </div>`;
    }
    const DOM = document.querySelector('.table-content');
    const incomeDOM = document.querySelector('.table-footer > .cell:nth-of-type(3)');
    const expenseDOM = document.querySelector('.table-footer > .cell:nth-of-type(4)');
    const balanceDOM = document.querySelector('.table-footer > .cell:nth-of-type(5)');
    DOM.innerHTML = HTML;

    balanceDOM.innerText = formatMoney(balance);
    incomeDOM.innerText = formatMoney(income);
    expenseDOM.innerText = formatMoney(expense);
    
    // console.log(HTML);
}

lentelesGeneravimas(menesiai, account);



