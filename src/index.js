import './style.css';

const taskListContainer = document.querySelector('.list-container');
const form = document.querySelector('.input-form')
class Tasks {
  constructor() {
    this.myToDoList = [];
  }
  populateToDoList = () => {
    taskListContainer.innerHTML = '';
    this.myToDoList.forEach((myToDoLists) => {
      const li = `<li class="list-item">
          <div class="list-div">
  
              <input type="checkbox" class="check" name="" id="">
              <p>${myToDoLists.description}</p>
                <input type="text" name="" id="" class="edit--input">
          </div>
          </div>
          <div class="second-list-div">
          <i class="fa-solid fa-ellipsis-vertical" data--option=${myToDoLists.index}></i>
          <i class="fa-solid fa-trash-can" data--trash=${myToDoLists.index}></i>
        </div>
      </li>`;
      taskListContainer.insertAdjacentHTML('beforeend', li);
    });
  }
  addTask = (description, completed = false) => {
    const index = this.myToDoList.length + 1;
    const newTask = {description, completed, index}
    this.myToDoList = [...this.myToDoList, newTask];
  }
  addTaskToUI = () => {
    form.addEventListener('submit', (e) => {
      const inputList = document.querySelector('.input-list');
      e.preventDefault();
      const {value} = inputList;
      if (value) {
        this.addTask (value);
        this.populateToDoList();
        inputList.value = '';
      }
    })
  }
}

const task = new Tasks();

window.addEventListener('DOMContentLoaded', () => {
  task.populateToDoList();
  task.addTaskToUI();
});
