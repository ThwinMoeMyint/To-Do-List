const whitePart = document.querySelector('.white');

export function addProject() {
    const projectName = document.createElement('div');
    projectName.className = 'project-name';

    whitePart.appendChild(projectName);

    return projectName;
}

const projectName = addProject();
addHeadline(projectName);

export function addHeadline(projectName) {
    const headline = document.createElement('h1');
    headline.className = 'p-name';
    const userInput = prompt('Enter the project name:');
    headline.textContent = userInput || 'Default Project Name';

    projectName.appendChild(headline);
}

