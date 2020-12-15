
var element = document.getElementById("genera");
element.addEventListener('click',
function() {
        var nomeUtente = document.getElementById('nome').value;
        console.log(nomeUtente);
        var distanza = document.getElementById('km').value;
        console.log(distanza);
        var eta = document.getElementById('eta').value;
        console.log(eta);
        
        
        var biglietto;
        var prezzoTotale = distanza * 0.21;
        
        
        biglietto = prezzoTotale;
        
        if (eta < 18){
            biglietto = prezzoTotale - (prezzoTotale * 20 / 100);
        }   else if (eta > 65) {
            biglietto = prezzoTotale - (prezzoTotale * 40 / 100);
        }

        document.getElementById('name').innerHTML = nomeUtente;
        document.getElementById('costo').innerHTML = biglietto;
    }
);

