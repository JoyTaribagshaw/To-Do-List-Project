import './style.css';
import task from './interface.js';

window.addEventListener('DOMContentLoaded', () => {
  task.setLocalStorage(task.myToDoList);
  task.populateToDoList();
  task.addTaskToUI();
  task.clearCompletedTasksFromUI();
});
export default task;