
import persona from '../JSON/data.json' assert {type: 'json'};
console.log(persona);


mostrarImagen();
mostrarDato('nombre');
mostrarDato('apellido');
mostrarDato('certificado');
mostrarDato('acercaDeMi');
experienciaYeducacion('experiencia')
experienciaYeducacion('educacion')
habilidades();
mouseSobreIconos();

function mostrarImagen(){
    const img = document.querySelector('.img');
    img.setAttribute('src', '.././imagen/anonimus.png')
}
function mostrarDato(variable) {

    document.getElementById(variable).innerHTML = persona[variable];
}
function experienciaYeducacion(variable) {
    let opcional = document.getElementById(variable);
    let exp = persona[variable][0];

    for (let propiedad in exp) {
        const li = document.createElement('li');
        const texto = document.createTextNode( exp[propiedad]);
        opcional.appendChild(li);
        li.appendChild(texto)
    }
}
function habilidades() {

    let habilidades = persona.habilidades[0];
    let progreso = document.querySelectorAll('#progreso');
    let cont = 0;

    for (const propiedad in habilidades) {
        progreso[cont].setAttribute('value', habilidades[propiedad]);
        progreso[cont].setAttribute('max', 100);
        cont++;

    }
}
function mouseSobreIconos() {
    let contacto = document.querySelector('.contacto');
    let icono = document.querySelectorAll('#icono');
    let contactos = persona.contactos[0];
    let cont = 0;
    for (const propiedad in contactos) {
        icono[cont].addEventListener('mouseenter', function () {
            contacto.innerHTML = contactos[propiedad];
        })
        cont++;

    }
}









