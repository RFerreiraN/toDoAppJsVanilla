const listaTareas = document.getElementById('listaTareas');
const localStorageKey = 'tarea';

function getTareas() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
}

function addTarea() {
    let tareaInput = document.getElementById('tareaInput').value;
    const tareas = getTareas();
    if(tareaInput.length === 0) return
    tareas.push(tareaInput);
    localStorage.setItem(localStorageKey, JSON.stringify(tareas)) 

    let li = document.createElement('li');
    li.textContent = tareaInput;
    listaTareas.appendChild(li);

    let button = document.createElement('button');
    button.textContent = 'Eliminar Tarea';
    listaTareas.appendChild(button)
    button.addEventListener('click' , () => {
        eliminarTarea(tareaInput, li, button)
    })

    document.getElementById('tareaInput').value = '';
}

function eliminarTarea(tareaTexto, liElemento, buttonElemento) {
    const tareas = getTareas();
    const index = tareas.indexOf(tareaTexto); // buscar la primera coincidencia del texto que se introdujo, y devuelve su indice
    if(index > -1){
        tareas.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(tareas));
        liElemento.remove();
        buttonElemento.remove();
    }
}   

console.log(getTareas());