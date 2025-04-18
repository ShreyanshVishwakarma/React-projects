ToDo: 
✅ Add feature: Edit a task

    Show input on clicking edit

    Update task text

💡 Suggestions to Take This to Next Level:
1. Add Unique ID to Each Task (for real-world scale)

Right now I am using index as key — which is okay for now but can break in bigger apps.

const newTask = {
  id: Date.now(),
  text: addtask
};

2. Better State Structure (for real apps)

Imagine if your task state was like:

const [tasks, setTasks] = useState([
  { id: 1, text: "Learn React", completed: false }
]);

This makes toggling complete status easier too.

3. Clear Completed Button

Let user clear all completed tasks.
