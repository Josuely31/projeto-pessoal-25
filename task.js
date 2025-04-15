class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      if (!task || typeof task !== 'string') throw new Error('Tarefa inválida');
      this.tasks.push({ task, completed: false });
    }
  
    removeTask(task) {
      this.tasks = this.tasks.filter(t => t.task !== task);
    }
  
    listTasks() {
      return this.tasks.map(t => t.task);
    }
  
    completeTask(task) {
      const foundTask = this.tasks.find(t => t.task === task);
      if (foundTask) foundTask.completed = true;
    }
  
    isCompleted(task) {
      const foundTask = this.tasks.find(t => t.task === task);
      return foundTask ? foundTask.completed : false;
    }
  }
  
  module.exports = TaskManager;
  