const whitePart = document.querySelector('.white');

export function addProject() {
    const projectName = document.createElement('div');
    projectName.className = 'project-name';

    whitePart.appendChild(projectName);

    return projectName;
}

export function addHeadline(projectName) {
    const headline = document.createElement('h1');
    headline.className = 'p-name';
    const userInput = prompt('Enter the project name:');
    headline.textContent = userInput || 'Default Project Name';

    projectName.appendChild(headline);
}

export function taskList(projectName) {
    const createtaskList = document.createElement('ul');
    createtaskList.className = 'lists';
    projectName.appendChild(createtaskList);

    return createtaskList;
}


export function addListButton(projectName) {
    const addListButton = document.createElement('button');
    addListButton.className = 'add-list';
    addListButton.textContent = '+ Add List';
    projectName.appendChild(addListButton);
}

export function addTask(createtaskList) {
    const taskBox = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskName = document.createElement('span');
    taskName.className = 'task';
    const userInput = prompt('Enter the task name:');
    taskName.textContent = userInput || 'Default Task Name';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = '✖';

    taskBox.appendChild(checkbox);
    taskBox.appendChild(taskName);
    taskBox.appendChild(deleteButton);

    createtaskList.appendChild(taskBox);
}

