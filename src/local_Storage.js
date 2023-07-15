class Storage {
  setLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getLocalStorage = () => (localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
}
export default Storage;