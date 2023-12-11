const input = document.getElementById('input')
const taskContainer = document.querySelector('.task-container')

function addTask() {
    const newTask = document.createElement('li')
    newTask.innerText = input.value
    taskContainer.appendChild(newTask)
    input.value = ''
}
