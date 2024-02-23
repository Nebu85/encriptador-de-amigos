const textoIngresado = document.getElementById('type-text');
const textoDeVuelta = document.getElementById('second-text');
const botonCifrar = document.getElementById('cifrado');
const botonCopy = document.getElementById('copy');
const botonDecifrar = document.getElementById('decifrar');

let codigo = [
    ['e','enter'],
    ['o','ober'],
    ['i','imes'],
    ['a','ai'],
    ['u','ufat'],
];



botonCifrar.addEventListener('click', () =>{
    const textoInicio = textoIngresado.value.toLowerCase();
    function cifrar(textoNuevo) {
        for ( let i = 0; i < codigo.length; i++){
            if (textoNuevo.includes(codigo[i][0])){
                textoNuevo = textoNuevo.replaceAll(codigo[i][0], codigo[i][1]);
            };
            
        };
        return textoNuevo
    }
    const texto1 = cifrar(textoInicio);
    

    textoDeVuelta.textContent = texto1
})

botonDecifrar.addEventListener('click', () =>{
    const textoInicio = textoIngresado.value.toLowerCase();
    function decifrar(textoSeparado) {
        for ( let i = 0; i < codigo.length; i++){
            if (textoSeparado.includes(codigo[i][1])) {
                textoSeparado = textoSeparado.replaceAll(codigo[i][1], codigo[i][0]);
            };
            
        };
        return textoSeparado
    }
    const texto2 = decifrar(textoInicio);
    

    textoDeVuelta.textContent = texto2
})

botonCopy.addEventListener('click', () =>{
    let text = textoDeVuelta;
    navigator.clipboard.writeText(text.value)
})