import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { ItemTypes } from "../dndItem";
import { addTodo, toggleTodo } from "../state/todo";
import { RootState } from "../store/store";
import { TodoItem } from "./TodoItem";

export const Board = () => {
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const [, drop] = useDrop({
    accept: ItemTypes.TODOS,
    drop: (item: any, monitor) => {
      const coord = monitor.getClientOffset();
      if (!coord) {
        return;
      }
      if (coord) {
        dispatch(
          toggleTodo({
            id: item.id as number,
            title: item.title as string,
            top: coord.y,
            left: coord.x,
          })
        );
      }
    },
  });
  return (
    <div
      className="bg-blue-200 min-w-full min-h-screen relative overflow-x-scroll"
      ref={drop}
      onDoubleClick={(e) => {
        dispatch(addTodo({ title: "", top: e.pageY, left: e.pageX }));
      }}
    >
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
