/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import RenderTip from "../RenderTip";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";
import FilterBtn from "./FilterBtn";

// flow.js
type TodoType = {
  id: number,
  text: string,
  done: boolean,
};

const initialList: TodoType[] = [
  { id: 1, text: "Use React", done: false },
  { id: 2, text: "Use ReactRouter", done: false },
  { id: 3, text: "Use Redux", done: false },
];

const filterValue = ["all", "finish", "yet"];

const TodoList = () => {
  const [list, setList] = useState(initialList);
  const [filterType, setFilterType] = useState("all");

  const atToggleItem = useCallback((id: String) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    setList(newList);
  });

  const addTodo = useCallback((value: String) => {
    const add = {
      id: list.length + 1,
      text: value,
      done: false,
    };
    const newList = [...list, add];
    setList(newList);
  });

  const deleteTodo = useCallback((id: Number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  });

  const atChangeType = useCallback((type: String) => {
    setFilterType(type);
  });

  const filterList = list.filter((item) => {
    if (filterType === "finish") return item.done;
    else if (filterType === "yet") return !item.done;
    return true;
  });

  return (
    <div>
      <RenderTip name={"container"} />
      <div>TodoList</div>
      <AddTodo onAddTodo={addTodo} />
      <div>
        {filterValue.map((type) => (
          <FilterBtn key={type} filterType={filterType} type={type} onChangeType={atChangeType} />
        ))}
      </div>
      <div>
        {filterList.map((todo) => (
          <TodoItems
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            onToggleItem={atToggleItem}
            onDeleteItem={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
