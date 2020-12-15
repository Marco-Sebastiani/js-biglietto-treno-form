
var element = document.getElementById("genera");
element.addEventListener('click',
    function() {
        //VALORI INPUT
        var nomeUtente = document.getElementById('nome').value;
        var distanza = document.getElementById('km').value;     
        var eta = document.getElementById('eta').value;
        

        //VALORI GENERALI
        var prezzoTotale = distanza * 0.21;
        var message = 'Tariffa base';
        
        //CALCOLIAMO IL PREZZO DEL BIGLIETTO
        if (eta == 'minorenne'){
            prezzoTotale -= (prezzoTotale * 20 / 100);
            message = 'Sconto minorenne del 20%'
        }   else if (eta == 'over') {
            prezzoTotale -= (prezzoTotale * 40 / 100);
            message = 'Sconto maggiorenne del 40%'
        }

        //ASSEGNAZIONE ALL'HTML DEI DATI ELABORATI
        document.getElementById('name').innerHTML = nomeUtente;
        document.getElementById('offerta-finita').innerHTML = message;
        document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById('codice-cp').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        document.getElementById('costo').innerHTML = prezzoTotale.toFixed(2) + ' €';

        document.getElementById('box-biglietto').className = 'show';

    }
);


var buttonClear = document.getElementById("annulla");

buttonClear.addEventListener('click',
    function() {
        //VALORI INPUT
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';     
        document.getElementById('eta').value = '';
        
        //ASSEGNAZIONE ALL'HTML DEI DATI ELABORATI
        document.getElementById('name').innerHTML = '';
        document.getElementById('offerta-finita').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codice-cp').innerHTML = '';
        document.getElementById('costo').innerHTML = '';
        document.getElementById('box-biglietto').className = 'hidden';
    }
);
