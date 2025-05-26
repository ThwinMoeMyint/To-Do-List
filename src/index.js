import './style.css';
import * as Code from './code.js';

// const projectName = Code.addProject();
// Code.addHeadline(projectName);
// const createtaskList = Code.taskList(projectName);
// Code.addListButton(projectName);
// Code.addTask(createtaskList);

const projects = [];

const buttons = document.querySelectorAll('.btn');


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            const newProject = Code.addProject();
            Code.addHeadline(newProject);
            const newTaskList = Code.taskList(newProject);
            Code.addListButton(newProject);
            projects.push({project: newProject, taskList: newTaskList});

            const addListButton = newProject.querySelector('.add-list');
            addListButton.addEventListener('click', () => {
            Code.addTask(newTaskList);
            })
        } else if (index === 1) {
            
        }
    });
});


