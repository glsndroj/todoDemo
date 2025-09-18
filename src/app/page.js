"use client";
import { v4 as uuid } from "uuid";
import { Input } from "./_components/Input";
import { Button } from "./_components/Button";
import { ListButton } from "./_components/ListButton";
import { List } from "./_components/List";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const addElement = (element) => {
    const newElement = { id: uuid(), element: element, checked: false };
    if (element === "") {
      setTodos(todos);
    } else {
      setTodos([...todos, newElement]);
    }
  };

  const listDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const filterredTodos = todos.filter((el) => {
    if (filter == "all") {
      return true;
    } else if (filter == "active") {
      return !el.checked;
    } else if (filter == "completed") {
      return el.checked;
    }
  });
  const completed = (id) => {
    const newArray = todos.map((el) => {
      if (el.id == id) el.checked = !el.checked;
      return el;
    });
    setTodos(newArray);
  };

  const deleteCompleted = () => {
    const activeList = todos.filter((todo) => {
      return !todo.checked;
    });
    setTodos(activeList);
  };
  return (
    <>
      <div className="flex justify-center mt-50">
        <div className=" px-10 py-6 flex flex-col gap-4 shadow-2xl rounded-[10px] w-fit">
          <p className="flex justify-center text-2xl font-bold">To-Do list</p>
          <div className=" flex gap-4">
            <Input
              input={input}
              setInput={setInput}
              addElement={addElement}
            ></Input>
            <Button
              input={input}
              addElement={addElement}
              setInput={setInput}
            ></Button>
          </div>
          <div>
            <ListButton filter={filter} setFilter={setFilter}></ListButton>
          </div>
          {todos.length == 0 ? (
            <p className="text-[#6B7280]">No tasks yet. Add one above!</p>
          ) : (
            <>
              {filterredTodos.map((todo, index) => {
                return (
                  <List
                    listDelete={listDelete}
                    key={uuid()}
                    todo={todo}
                    completed={completed}
                  ></List>
                );
              })}
              <div className="flex justify-between">
                <p className="text-[#6B7280]">
                  {todos.filter((todo) => todo.checked).length} of{" "}
                  {todos.length} tasks completed
                </p>
                {filter === "completed" ? (
                  <button
                    className="text-gray-500 active:text-gray-400 w-fit cursor-pointer"
                    onClick={deleteCompleted}
                  >
                    Delete All
                  </button>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
