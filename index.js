const input = document.getElementById('input')
const taskContainer = document.querySelector('.task-container')
const editBtn = document.querySelector('.editBtn')
const editInput = document.querySelector('.editInput')

function addTask() {
    if (input.value.trim() === ``) {
        alert(`input value is empty: please write something`)
    } else {
        const taskContent = input.value.charAt(0).toUpperCase()
        const concatTaskContent = taskContent + input.value.slice(1)
        const newTask = document.createElement('li')
        const span = document.createElement('span')
        span.innerHTML = "&times;"
        newTask.innerText = concatTaskContent
        const edit = document.createElement('button')
        edit.innerHTML = 'Edit'
        edit.id = 'edit'
        edit.className = 'edit-button'
        taskContainer.appendChild(newTask)
        newTask.appendChild(span)
        newTask.appendChild(edit)


        edit.addEventListener('click', () => {
            newTask.innerHTML = `
            <input type="text" id="myTextInput" placeholder="Enter text here">
            `
            newTask.focus()
        })
    }
    input.value = ''
}

taskContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        //<input type="text" id="myTextInput" placeholder="Enter text here">
    }

}, false)

