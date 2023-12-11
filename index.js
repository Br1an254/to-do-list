const input = document.getElementById('input')
const taskContainer = document.querySelector('.task-container')

function addTask() {

    if (input.value.trim() === ``) {
        alert(`input value is empty: please write something`)
    } else {
       const taskContent = input.value.charAt(0).toUpperCase()
       const concatTaskContent = taskContent + input.value.slice(1)
       const newTask = document.createElement('li')
       newTask.innerText = concatTaskContent
       taskContainer.appendChild(newTask)
    }
    input.value = ''
}
