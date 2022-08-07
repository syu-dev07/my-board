import React, { FC, useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../dndItem";
import { Todo } from "../state/todo";

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const left = todo.left;
  const top = todo.top;
  const [text, setText] = useState<string>(todo.title);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TODOS,
      item: {
        coordinates: {
          top,
          left,
        },
        id: todo.id,
        title: todo.title,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [top, left, todo.id, todo.title]
  );
  return (
    <input
      key={todo.id}
      ref={drag}
      type="text"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      className={`absolute top-[${top}px] left-[${left}px] w-28 h-28 border border-gray-300 p-2 text-center bg-yellow-100 cursor-pointer opacity:${
        isDragging ? 0.5 : 1
      }`}
      style={{ top: top + "px", left: left + "px" }}
    />
  );
};
