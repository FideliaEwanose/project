function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') return;
    
    const li = document.createElement('li');
    li.innerText = taskText;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    doneButton.innerText = 'Done';
    doneButton.onclick = function() {
        console.log("Done button")
        li.style.background="green";
        li.style.font="30px";
        doneButton.style.display="none"
        deleteButton.style.display="none"
    };

    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
    };

    buttonsDiv.appendChild(doneButton);
    buttonsDiv.appendChild(deleteButton);

    li.appendChild(buttonsDiv);
    document.getElementById('toDoList').appendChild(li);

    document.getElementById('newTask').value = '';
}