const inputBox = document.getElementById('input-box');
const taskList = document.getElementById('task-list');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        // li.classList.add('unchecked');
        taskList.appendChild(li);

        // let cross = document.createElement('span');
        // cross.innerHTML = "\u00D7";
        // li.appendChild(cross);

        // li.classList.toggle('unchecked');
        inputBox.value = '';
    }
}

inputBox.addEventListener('keyup', function(keyPressed) {
    if (keyPressed.keyCode === 13) {
        addTask();
    }
});

// taskList.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('checked');
//     } else if (event.target.tagName === 'SPAN') {
//         event.target.parentElement.remove();
//     }
// });
