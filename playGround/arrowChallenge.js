const tasks = {
    tasks: [
      { text: 'Grocery shopping', completed: true },
      { text: 'Clean yard', completed: false },
      { text: 'Film course', completed: false }
    ],
    getTasksToDo() {
      return this.tasks.filter(task => {
        if (!task.completed) {
          console.log(`You must do: ${task.text}`);
        }
      }); // No need for extra return here
    }
  };
  
  console.log(tasks.getTasksToDo());
  