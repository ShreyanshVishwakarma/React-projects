"use client";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Home() {
  const [addtask, setAddtask] = useState("");
  const [task, setTask] = useState([{id:1, text: "Learn React", completed: false}]);

  const addtaskHandler = (event) => {
    //add task ... update state of tasks
    setAddtask(event.target.value);
  }

  const handleClick = (e) => {
    const newTask = {
      id: Date.now(),
      text: addtask,
      completed: false
    };
    setTask([newTask,
      ...task
    ]);
    setAddtask("");
  }

  const handleDelete = (id) => {
    const updatedTasks = task.filter((item) => item.id !== id);
    setTask(updatedTasks);
  }

  const handleChecked = (id)=>{
    const updatedTasks = task.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTask(updatedTasks);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen bg-gradient-to-r from-amber-50 to-amber-200">
        <h1 className="text-6xl font-bold pt-12 pb-12">TODO APP</h1>
      </div>
      <div className="flex justify-center items-center gap-2.5 p-3">
        <h1 className="font-bold text-4xl">+</h1>
        <h1 className="font-bold text-3xl">Add tasks ....</h1>
      </div>
      <label className="flex justify-center items-center gap-2 pb-3">
        <button
          className="font-bold text-xl p-2 bg-blue-400 rounded-2xl"
          disabled={addtask === ""}
          onClick={handleClick}
        >
          Add
        </button>
        <input name="add task" className="border-2" onChange={addtaskHandler} value={addtask} />
      </label>
      <hr />
      <div className="taskss flex flex-col justify-center items-center">
        {
          task.filter(task=>!task.completed).map((tasks) => {
            return (
              <div key={tasks.id} className="flex justify-center items-center gap-2 p-3">
                <label className="flex justify-center items-center gap-2">
                  <input className="font-bold size-5 " type="checkbox" onChange={() => handleChecked(tasks.id)}/>
                  <h1 className="font-bold text-3xl">{tasks.text}</h1>
                  <button className="p-2 rounded-2xl" onClick={() => handleDelete(tasks.id)}>
                    <MdDeleteForever className="text-red-500 size-11" />
                  </button>
                </label>
              </div>
            )
          })
        }
      </div>
      {/* Display Completed Tasks */}
      <hr />
      <div className="completed-tasks flex flex-col justify-center items-center mt-4">
        <h2 className="text-2xl font-bold mb-2">Completed Tasks</h2>
        {task.filter(task=>task.completed).map((completedTask) => (
          <div key={completedTask.id} className="flex justify-center items-center gap-2 p-2">
            <h1 className="font-bold text-xl line-through text-gray-500">{completedTask.text}</h1>
          </div>
        ))}
      </div>
    </>
  );
}