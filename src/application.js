const keyStudents = 'students';
const localStorageType = 'localStorage';

// Funcion donde cargaremos todo al terminar el load del DOM
const load = () => {
    console.log('DOM cargado!')
    document.addEventListener('submit', handleFormSubmit, false);
}

const mapFormData = (objectTarget, form) => {
    objectTarget = objectTarget || {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        objectTarget[element.name || element.id] = element.value;
    }
    return objectTarget;
}

const save = (data, key, storage = localStorageType) => {
    if(storage = localStorageType){
        return saveToLocalstorage(data, key);
    }
}

const saveToLocalstorage = (data, key) => {
    if (localStorage) {
        if (localStorage.getItem(key)) {
            // Si exiten los studens en el local storage,
            // deserializo
            collection = JSON.parse(localStorage.getItem(key));
        } else {
            // Sino creo un collection vacio
            collection = [];
        }
        // Agrego los datos nuevos
        collection.push(data)
        // Y guardo en el local storage los studens acutalizado
        localStorage.setItem(key, JSON.stringify(collection))
        return true;
    }
    el.innerHTML = "Su navegador no permite localStorage";
    return false
}

// Manejador del evento para el form submit
const handleFormSubmit = (event) => {
    event.preventDefault();
    var form = document.getElementById('new_student');
    var data = {};
    // Mediante el atributo elemens accedo a todos los inputs del form
    data = mapFormData(data, form);
    console.log(data)

    if(save(data, keyStudents, localStorageType)) {
        form.reset();
        alert('Se guardó con éxito.');
    }
}

// Agregar el listener para cuando el DOM este totalmente carga
document.addEventListener('DOMContentLoaded', load, false);