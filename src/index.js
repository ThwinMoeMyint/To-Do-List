import './style.css';
import './index.html';
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
            Code.addListButton(newProject);
            projects.push({project: newProject, taskList: newTaskList});
        } else if (index === 1) {
            
        }
    });
});

const addListButton = document.querySelector('.add-list');
const taskLists = [];
addListButton.addEventListener('click', () => {
    const newTaskList = Code.taskList(projectName);
    Code.addTask(newTaskList);
    taskLists.push(newTaskList);
})
