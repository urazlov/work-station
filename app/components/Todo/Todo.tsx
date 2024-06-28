import { IoCloseSharp } from "react-icons/io5";
import "./Todo.scss";
import { useToDo } from "@/app/store";
import { FaCheck, FaTrash } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import clsx from "clsx";
import { useState } from "react";
import { ITodoItem } from "@/app/interfaces";

export const Todo = () => {
  const { items, setIsToDoToggled, setItems } = useToDo();

  const [isAddMode, setAddMode] = useState<boolean>();
  const [text, setText] = useState("");

  const handleDoneChanged = (id: number) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  }

  const handleDeleteTask = (id: number) => {
    setItems(items.filter((i) => i.id !== id));
  }

  const handleAddTask = () => {
    if (!text) return;

    const tasks = [...items];
    tasks.push({ text, isDone: false, id: Date.now() });
    setItems(tasks);
    setText("");
    setAddMode(false);
  }

  const handleEnterKeyDown = (key: string) => {
    if (key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div className="widget-container todo-container">
      <IoCloseSharp className="pointer scale toggle" onClick={() => setIsToDoToggled(false)} />
      <div className="todo-header move">
        <p>Task List</p>
        <button onClick={() => setAddMode(!isAddMode)}>{isAddMode ? "Close" : "Add"}</button>
      </div>
      <div className="todo-content">
        {isAddMode ? (
          <div className="todo-add">
            <input
              type="text"
              autoFocus
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
              onKeyDown={e => {
                handleEnterKeyDown(e.key);
              }}
            />
            <FaCheck onClick={handleAddTask} className="pointer todo-icon done scale" />
          </div>
        ) : (
          ""
        )}

        {items.length == 0 ? "No task to show" : ""}

        {items.map(item => {
          return (
            <div className={clsx("todo-item", item.isDone ? "active" : "")} key={item.text}>
              <span className="pointer todo-icon" onClick={() => handleDoneChanged(item.id)}>
                {item.isDone ? <RiArrowGoBackFill /> : <FaCheck />}
              </span>
              <span>{item.text}</span>
            <FaTrash onClick={() => handleDeleteTask(item.id)} className="pointer todo-icon remove"/>
            </div>
          );
        })}
      </div>
      <div className="todo-footer">{items.length == 0 ? "" : <button onClick={() => setItems([])}>Clear All</button>}</div>
    </div>
  );
};
