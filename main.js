

const contentTareas = document.getElementById('contentListaTareas');
const localStorageKey = 'Tareas'

function getTareas() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]')
}

function addTarea() {
    const tareas = getTareas();
    const tareaInput = document.getElementById('tareaInput').value
    if (tareaInput.length === 0) return
    tareas.push(tareaInput);
    localStorage.setItem(localStorageKey, JSON.stringify(tareas));



    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = tareaInput;


    const button = document.createElement('button');
    button.textContent = 'Eliminar Tarea';
    button.className = 'btn btn-danger btn-sm';
    button.addEventListener('click', () => {
        eliminarTarea(tareaInput, li, button)
    })


    li.appendChild(button);
    contentTareas.appendChild(li);


    document.getElementById('tareaInput').value = ''
}

function eliminarTarea(nombreTarea, liElement, buttonElement) {
    const tareas = getTareas();
    const index = tareas.indexOf(nombreTarea);
    if (index > -1) {
        tareas.splice(index, 1)
        liElement.remove()
        buttonElement.remove()
    }
    localStorage.setItem(localStorageKey, JSON.stringify(tareas))
}

function renderTareas() {
    const tareas = getTareas();
    tareas.forEach( tarea => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        li.textContent = tarea

        const button = document.createElement('button');
        button.className = 'btn btn-danger btn-sm';
        button.textContent = 'Eliminar Tarea';
        button.addEventListener('click', () => {
            eliminarTarea(tarea, li, button)
        })

        li.appendChild(button)
        contentTareas.appendChild(li)
    })
}

renderTareas()