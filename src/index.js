import './style.css';

const taskListContainer = document.querySelector('.list-container');

const myToDoList = [
  {
    description: 'wash my hair',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'read javascript',
    completed: false,
    index: 3,
  },
];

const populateToDoList = () => {
  myToDoList.forEach((myToDoLists) => {
    const li = `<li class="list-item">
        <div class="list-div">
            <input type="checkbox" class="check" name="" id="">
            <p>${myToDoLists.description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>`;
    taskListContainer.insertAdjacentHTML('beforeend', li);
  });
};

window.addEventListener('DOMContentLoaded', populateToDoList);
