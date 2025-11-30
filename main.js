function addTask() {
    let task = document.getElementById('input')
    let taskValue = task.value

    const ul = document.getElementsByClassName('tasks')[0]
    const li = document.createElement('li')
    const label = document.createElement('label')
    label.className = "task"
    const input = document.createElement('input')
    input.className = "task-checkbox"
    const span = document.createElement('span')

    li.textContent = taskValue
    if (taskValue != '' && taskValue.length >= 3 && taskValue != '   ') {
        ul.appendChild(li)
        ul.appendChild()
    }

}