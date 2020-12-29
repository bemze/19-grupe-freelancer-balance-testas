

function lentelesGeneravimas(menesiuPavadinimai, pinigine) {
    let HTML = '';
    for(let i = 0; i < pinigine.length; i++) {
        const item = pinigine[i];
        console.log(item);
        HTML += ` <div class="table-row">
                    <div class="cell">1</div>
                    <div class="cell">${data}</div>
                    <div class="cell">150</div>
                    <div class="cell">-</div>
                    <div class="cell">150.00 Eur</div>
                 </div>`;

    }

}

lentelesGeneravimas(menesiai, account);

