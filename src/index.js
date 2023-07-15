// import './style.css';
// import Storage from './local_Storage.js';

// const taskListContainer = document.querySelector('.list-container');
// const form = document.querySelector('.input-form');
// class Tasks extends Storage {
//   constructor() {
//     super();
//     this.myToDoList = this.getLocalStorage();
//   }

//   populateToDoList = () => {
//     taskListContainer.innerHTML = '';
//     this.myToDoList.forEach((myToDoLists) => {
//       const li = `<li class="list-item">
//           <div class="list-div">
//             <div class="desc-flex">
//               <input type="checkbox" class="check" name="" id="">
//               <p class="desc">${myToDoLists.description}</p>
//             </div>
//             <form class="edit-form">
//             <input type="text" name="" id="" class="edit--input">
//             </form>
//           </div>
//           <div class="second-list-div">
//           <i class="fa-solid fa-ellipsis-vertical" data--option=${myToDoLists.index}></i>
//           <i class="fa-solid fa-trash-can" data--trash=${myToDoLists.index}></i>
//         </div>
//       </li>`;
//       taskListContainer.insertAdjacentHTML('beforeend', li);
//       const trashIcons = taskListContainer.querySelectorAll('.fa-trash-can');
//       const verticalIcons = taskListContainer.querySelectorAll(
//         '.fa-ellipsis-vertical',
//       );

//       verticalIcons.forEach((icon) => {
//         icon.addEventListener('click', (e) => {
//           const { Option } = e.target.dataset;
//           const parent = e.target.parentElement.parentElement;
//           const editInput = parent.querySelector('.edit--input');
//           const descPara = parent.querySelector('.desc');
//           const editForm = parent.querySelector('.edit-form');
//           parent.classList.add('hide--desc');
//           editInput.value = descPara.textContent;
//           editInput.focus();
//           editForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             if (editInput.value) {
//               this.editTask(Option, editInput.value);
//               this.populateToDoList();
//               this.setLocalStorage(this.myToDoList);
//             }
//           });
//         });
//       });
//       trashIcons.forEach((icon) => {
//         icon.addEventListener('click', (e) => {
//           const { Trash } = e.target.dataset;
//           this.removeTask(Trash);
//           this.updateTaskIndex();
//           this.populateToDoList();
//           this.setLocalStorage(this.myToDoList);
//         }, { once: true });
//       });
//     });
//   };

//   addTask = (description, completed = false) => {
//     const index = this.myToDoList.length + 1;
//     const newTask = { description, completed, index };
//     this.myToDoList = [...this.myToDoList, newTask];
//   };

//   removeTask = (index) => {
//     this.myToDoList = this.myToDoList.filter((list) => list.index !== +index);

//   };

// updateTaskIndex = () => {
//   this.myToDoList.forEach((list, newIndex ) => {
//    list.index = newIndex + 1;
//   })
// }

//   editTask = (index, value) => {
//     this.myToDoList = this.myToDoList.map((list) => {
//       if (list.index === +index) {
//         list.description = value;
//       }
//       return list;
//     });
//   };

//   addTaskToUI = () => {
//     form.addEventListener('submit', (e) => {
//       const inputList = document.querySelector('.input-list');
//       e.preventDefault();
//       const { value } = inputList;
//       if (value) {
//         this.addTask(value);
//         this.populateToDoList();
//         this.setLocalStorage(this.myToDoList);
//         inputList.value = '';
//       }
//     });
//   };
// }

// const task = new Tasks();

// window.addEventListener('DOMContentLoaded', () => {
//   task.setLocalStorage(task.myToDoList);
//   task.populateToDoList();
//   task.addTaskToUI();
// });

import './style.css';
import Storage from './local_Storage.js';

const taskListContainer = document.querySelector('.list-container');
const form = document.querySelector('.input-form');
class Tasks extends Storage {
  constructor() {
    super();
    this.myToDoList = this.getLocalStorage();
  }

  populateToDoList = () => {
    taskListContainer.innerHTML = '';
    this.myToDoList.forEach((myToDoLists) => {
      const li = `<li class="list-item">
          <div class="list-div">
            <div class="desc-flex">
              <input type="checkbox" class="check" name="" id="">
              <p class="desc">${myToDoLists.description}</p>
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
      taskListContainer.insertAdjacentHTML('beforeend', li);
      const trashIcons = taskListContainer.querySelectorAll('.fa-trash-can');
      const verticalIcons = taskListContainer.querySelectorAll(
        '.fa-ellipsis-vertical',
      );

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
          // this.updateTaskIndex();
          this.populateToDoList();
          this.setLocalStorage(this.myToDoList);
        }, { once: true });
      });
    });
  };

  // resetIndex = (reset) => reset.forEach((index, number) => {index.index = number});

  addTask = (description, completed = false, index = this.myToDoList.length + 1) => {
    const newTask = { description, completed, index };
    this.myToDoList.push(newTask);
  };

  removeTask = (index) => {
    // const item = this.myToDoList[index]
    console.log(Array.isArray(this.myToDoList));
    console.log(index);
    // this.resetIndex(this.myToDoList);
  };

  updateTaskIndex = () => {
      this.myToDoList.forEach((list, newIndex ) => {
       list.index = newIndex + 1;
      })
    };

  editTask = (index, value) => {
    this.myToDoList = this.myToDoList.map((list) => {
      if (list.index === +index) {
        list.description = value;
      }
      return list;
    });
  };

  addTaskToUI = () => {
    form.addEventListener('submit', (e) => {
      const inputList = document.querySelector('.input-list');
      e.preventDefault();
      const { value } = inputList;
      if (value) {
        this.addTask(value);
        this.populateToDoList();
        this.setLocalStorage(this.myToDoList);
        inputList.value = '';
      }
    });
  };
}

const task = new Tasks();

window.addEventListener('DOMContentLoaded', () => {
  task.setLocalStorage(task.myToDoList);
  task.populateToDoList();
  task.addTaskToUI();
});