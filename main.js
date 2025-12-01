
function addTask() {
    let task = document.getElementById('input')
    let taskValue = task.value

    const ul = document.getElementsByClassName('tasks')[0]
    const li = document.createElement('li')
    const label = document.createElement('label')
    label.className = "task"
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.className = "task-checkbox"
    const span = document.createElement('span')
    span.className = 'task-text'
    const button = document.createElement('button')
    button.className = 'delete'
    button.textContent = 'x'
    span.textContent = taskValue
    const edit = document.createElement('button')
    edit.textContent = 'Edit'
    edit.className = 'editButton'


    label.appendChild(input)
    label.appendChild(span)
    li.appendChild(label)
    li.appendChild(button)
    li.appendChild(edit)
    if (taskValue != '' && taskValue.length >= 3 && taskValue != '   ') {
        ul.appendChild(li)

    }
    button.addEventListener("click", () => {
        li.remove()
    })
    edit.addEventListener('click', () => {
        let newText = prompt('daxil et');
        span.textContent = newText
    })
}

