const miModulo = (() =>{ 
    
    'use strict'
    
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K']

    let puntosJugadores = [];     
    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas')

    // esta funcion inicializa el juego
    const inicializacionJuego = (numJugadores = 2) =>{
        deck = crearDeck();
        puntosJugadores = []
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)
            puntosHTML[i].innerText = 0
            divCartasJugadores[i].innerHTML = ''    
        }
        console.log({puntosJugadores})
        btnDetener.disabled = false;
        btnPedir.disabled = false;

        
       
    

    }      
    // funciones
    const crearDeck = () => {
        deck = [];
        for(let i = 2; i <= 10; i++){
            for( let tipo of tipos){
                deck.push(i + tipo);
            }
        }
        for(let especial of especiales){
            for(let tipo of tipos){
                deck.push(especial + tipo);
            }
        }
        
        return _.shuffle(deck)
    } 
    const pedirCarta = () => {
        if ( deck.length === 0) {
            throw 'No hay cartas en el deck '
        }
        
        return deck.shift();
    }
    const valorCarta = ( carta ) => {  
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN(valor) ) ? 
                (valor === 'A') ? 11 : 10
                                : ( valor * 1)
    }
    // turno: 0 = primer jugador y el ultimo la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]
    }
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        divCartasJugadores[turno].append(imgCarta);
    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) =>{ 
        if (puntosMinimos <= 21){
            do {
                const carta = pedirCarta();
                acumularPuntos(carta, puntosJugadores.length - 1 );
                crearCarta(carta, puntosJugadores.length - 1)
            } while (puntosJugadores[puntosJugadores.length - 1] <= puntosMinimos)
        } else {
            do {
                const carta = pedirCarta()
                acumularPuntos(carta, puntosJugadores.length - 1 )
                crearCarta(carta, puntosJugadores.length - 1)
            } while (puntosJugadores[puntosJugadores.length - 1] <= 11);
        }
        setTimeout(( ) => {
            const vic = ( (puntosJugadores[puntosJugadores.length - 1] > 21 || puntosJugadores[0] > puntosJugadores[puntosJugadores.length - 1]) && (puntosJugadores[0] <= 21) ) ? alert('Ganaste') 
                      : ( (puntosJugadores[0] === puntosJugadores[puntosJugadores.length - 1]) && (puntosJugadores[0] <= 21) ) ? alert('Empate')
                      : alert('Perdiste')   
        }, 50)
    }
    const detenerBtn = () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    }
    
    // Eventos
    btnPedir.addEventListener('click', function(){
        const carta = pedirCarta()
        let puntosJugador = acumularPuntos(carta, 0 )
        crearCarta(carta, 0)
        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            detenerBtn();    
        } else if(puntosJugador === 21) {
            console.warn('21, genial!')
            detenerBtn();
        }
    })
    btnDetener.addEventListener('click', function(){
        detenerBtn();
    })
    btnNuevo.addEventListener('click', function(){    
        inicializacionJuego();   
    })    

    return {
        nuevoJuego: inicializacionJuego
    };
})()

