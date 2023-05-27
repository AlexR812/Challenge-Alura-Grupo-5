let mensaje = "Bienvenido a la liga de las leyendas"

/*let cadena = String(mensaje).split('');

let encriptado = [];

console.log(cadena);

for (let i = 0; i < cadena.length; i++) {

    if(cadena[i] != 'a' && cadena[i] != 'e' && cadena[i] != 'i' && cadena[i] != 'o' && cadena[i] != 'u'){
        encriptado.push(cadena[i]);
    } else {
        if(cadena[i] == 'a'){
            cadena[i] = "ai"
            encriptado.push(cadena[i]);
        }
        if(cadena[i] == 'e'){
            cadena[i] = "enter"
            encriptado.push(cadena[i]);
        }
        if(cadena[i] == 'i'){
            cadena[i] = "imes"
            encriptado.push(cadena[i]);
        }
        if(cadena[i] == 'o'){
            cadena[i] = "ober"
            encriptado.push(cadena[i]);
        }
        if(cadena[i] == 'u'){
            cadena[i] = "ufat"
            encriptado.push(cadena[i]);
        }   
    }
}

console.log(encriptado.join(''));
*/

function encriptar(texto) {

    let cadena = String(texto).split('');

    let encriptado = []; 

    for (let i = 0; i < cadena.length; i++) {
    
        if(cadena[i] != 'a' && cadena[i] != 'e' && cadena[i] != 'i' && cadena[i] != 'o' && cadena[i] != 'u'){
            encriptado.push(cadena[i]);
        } else {
            if(cadena[i] == 'a'){
                cadena[i] = "ai"
                encriptado.push(cadena[i]);
            }
            if(cadena[i] == 'e'){
                cadena[i] = "enter"
                encriptado.push(cadena[i]);
            }
            if(cadena[i] == 'i'){
                cadena[i] = "imes"
                encriptado.push(cadena[i]);
            }
            if(cadena[i] == 'o'){
                cadena[i] = "ober"
                encriptado.push(cadena[i]);
            }
            if(cadena[i] == 'u'){
                cadena[i] = "ufat"
                encriptado.push(cadena[i]);
            }   
        }
    }

    return encriptado.join('');
}

console.log(encriptar(mensaje));






/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/