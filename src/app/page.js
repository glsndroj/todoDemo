"use client";
import { v4 as uuid } from "uuid";
import { Input } from "./_components/Input";
import { Button } from "./_components/Button";
import { ListButton } from "./_components/ListButton";
import { List } from "./_components/List";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]); // Hooson array(hamag ymaa end shidne)
  const [input, setInput] = useState("");// hooson string inputes orj irj bga utgiig shidnee

  const addElement = (element) => { // element n input deer bichigdej bgaa utga
    const newElement = { id: uuid(), element: element };// todos ruu shine element oruulad setTodos array uusgej bga
    if (element === "") { // herwee element n hooson string baiwal array n nemegdehgui heweeree bna 
      setTodos(todos); 
    } else {         // herwee hooson bish l bwal shine array uusgej bga
      setTodos([...todos, newElement]);
    }
  }; // shine list nemdeg function, inputees awch bgaa utgiig door oruuldag, 

  const listDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };// 

  return (
    <>
      <div className="flex justify-center mt-50">
        <div className=" p-10 flex flex-col gap-4 shadow-2xl rounded-[10px] w-fit">
          <p className="flex justify-center text-2xl font-bold">To-Do list</p>
          <div className=" flex gap-4">
            <Input input={input} setInput={setInput}></Input>
            <Button
              input={input}
              addElement={addElement}
              setInput={setInput}
            ></Button>
          </div>
          <div>
            <ListButton></ListButton>
          </div>
          {todos.map((todo, index) => {
            return (
              <List listDelete={listDelete} key={uuid()} todo={todo}></List>
            );
          })}
        </div>
      </div>
    </>
  );
}
