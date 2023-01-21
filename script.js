//manipulacion del dom basica
//console.log('hola mundo');
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
//variables q seleccionan los id de las etiquetas en html, mediante la funcion queryselectorr
const parrafito = document.querySelector('parrafito')
const pid = document.getElementById('pid')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result');


//metodo q escucha cuando se usa un evento, para despues 
//especificarle q hacer mediante code of js
form.addEventListener('submit', suminputValues);

//crear funcion para mandar a llamar en el evento submit - escuchar sobre q eventos da click el usuario
function suminputValues(event){
    console.log({event});
    //evita q el form con el ultimo btn, recargue la pagina
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
    //console.log('click sobre el btn')
}

/* console.log({
    h1,
    p,
    parrafito,
    pid,
    input
}); */

//modifica el texto de la etiqueta h1
h1.innerHTML = 'Hola mundo <br> Kbrones';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');

//agrega una clase ala etiqueta h1
h1.classList.add('rojo')
//elimina una clase de la etiqueta h1
h1.classList.remove('rosa')

//le asigna un valor a la etiqueta h1
//input.value="456"

//crea una variable de tipo img con sus respectivos atributos
//para despues mostrarla dentro de una etiqueta(pid)
const img = document.createElement('img');
img.setAttribute('src', 'https://cdn-3.expansion.mx/dims4/default/1aae5e5/2147483647/strip/true/crop/1000x1500+0+0/resize/1200x1800!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F98%2Fd6%2F9def256044b59b68e3cc77dba775%2Fzayn-malik.jpg')
console.log(img);

//quita el texto dentro de pid
pid.innerHTML= "";
//muestra la img
//pid.appendChild(img);