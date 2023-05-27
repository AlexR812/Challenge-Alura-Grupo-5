const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    if(textArea.value != ""){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    } else {
        alert("No hay ningun texto ingresado")
    }
}

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

function btnDesencriptar(){
    if(textArea.value != ""){
        const textoDesencriptado = desencriptar(textArea.value)
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    } else {
        alert("No hay ningun texto ingresado")
    }
}

function desencriptar(texto) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    texto = texto.toLowerCase();


    for (let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return texto;
}

function copiar() {
    if(mensaje.value != "") {
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value = "";
        alert("Texto Copiado")
    } else {
        alert("No hay ningun texto que copiar")
    }
};