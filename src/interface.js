import Storage from './local_Storage.js';

const taskListContainer = document.querySelector('.list-container');
const form = document.querySelector('.input-form');
const clearBtn = document.querySelector('.clear-btn');
const enterKey = document.querySelector('.fa-arrow-turn-down');
class Tasks extends Storage {
  constructor() {
    super();
    this.myToDoList = this.getLocalStorage();
  }

  populateToDoList = () => {
    taskListContainer.innerHTML = '';
    const elements = this.myToDoList.map((myToDoLists) => {
      const listElement = `<li class="list-item">
      <div class="list-div">
        <div class="desc-flex">
          <input type="checkbox" class="check" name="" id=${myToDoLists.index}  ${myToDoLists.completed ? 'checked' : ''}>
          <p class="desc ${myToDoLists.completed && 'strike--through'}">${myToDoLists.description}</p>
        </div>
        <form class="edit-form">
        <input type="text" name="" id="" class="edit--input">
        </form>
      </div>
      <div class="second-list-div">
      <i class="fa-solid fa-ellipsis-vertical" data--option=${myToDoLists.index}></i>
      <i class="fa-solid fa-trash-can" data--trash=${myToDoLists.index}></i>
    </div>
  </li>`;
      return listElement;
    }).join('');
    taskListContainer.insertAdjacentHTML('beforeend', elements);
    const trashIcons = taskListContainer.querySelectorAll('.fa-trash-can');
    const verticalIcons = taskListContainer.querySelectorAll(
      '.fa-ellipsis-vertical',
    );
    const checkBoxes = taskListContainer.querySelectorAll('.check');

    verticalIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const { Option } = e.target.dataset;
        const parent = e.target.parentElement.parentElement;
        const editInput = parent.querySelector('.edit--input');
        const descPara = parent.querySelector('.desc');
        const editForm = parent.querySelector('.edit-form');
        parent.classList.add('hide--desc');
        editInput.value = descPara.textContent;
        editInput.focus();
        editForm.addEventListener('submit', (e) => {
          e.preventDefault();
          if (editInput.value) {
            this.editTask(Option, editInput.value);
            this.populateToDoList();
            this.setLocalStorage(this.myToDoList);
          }
        });
      });
    });
    trashIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const { Trash } = e.target.dataset;
        this.removeTask(Trash);
        this.updateTaskIndex();
        this.populateToDoList();
        this.setLocalStorage(this.myToDoList);
      });
    });
    checkBoxes.forEach((checkBox) => {
      checkBox.addEventListener('change', (e) => {
        const { id } = e.target;
        const parent = e.target.parentElement.parentElement;
        const pTag = parent.querySelector('.desc');
        pTag.classList.toggle('strike--through');
        this.updateCompletionStatus(+id);
        this.setLocalStorage(this.myToDoList);
      });
    });
  };

  addTask = (description, completed = false) => {
    const index = this.myToDoList.length + 1;
    const newTask = { description, completed, index };
    this.myToDoList = [...this.myToDoList, newTask];
  };

  removeTask = (index) => {
    this.myToDoList = this.myToDoList.filter((list) => list.index !== +index);
  };

  updateTaskIndex = () => {
    this.myToDoList = this.myToDoList.map((list, index) => {
      list.index = index + 1;
      return list;
    });
  }

  editTask = (index, value) => {
    this.myToDoList = this.myToDoList.map((list) => {
      if (list.index === +index) {
        list.description = value;
      }
      return list;
    });
  };

  updateCompletionStatus = (index) => {
    this.myToDoList = this.myToDoList.map((list) => {
      if (list.index === index) {
        list.completed = !list.completed;
      }
      return list;
    });
  };

  clearAllCompletedTasks = () => {
    this.myToDoList = this.myToDoList.filter((list) => !list.completed);
  };

  addTaskToUI = () => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmission();
    });
    enterKey.addEventListener('click', this.handleSubmission);
  };

  handleSubmission = () => {
    const inputList = document.querySelector('.input-list');
    const { value } = inputList;
    if (value) {
      this.addTask(value);
      this.populateToDoList();
      this.setLocalStorage(this.myToDoList);
      inputList.value = '';
    }
  }

  clearCompletedTasksFromUI = () => {
    clearBtn.addEventListener('click', () => {
      this.clearAllCompletedTasks();
      this.setLocalStorage(this.myToDoList);
      this.populateToDoList();
    });
  }
}

const task = new Tasks();
export default task;