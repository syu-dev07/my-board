import type { NextPage } from "next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Board } from "../component/Board";
import { addTodo } from "../state/todo";
import { RootState } from "../store/store";

const Home: NextPage = () => {
  const state = useSelector((state: RootState) => state);
  const todos = state.todos;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const add = () => {
    dispatch(addTodo({ title }));
  };
  return (
    <div>
      <header className="border border-gray-300 py-2">
        <div className="max-w-lg mx-auto">
          <p className="text-2xl">My Board</p>
        </div>
      </header>
      <div className="mx-auto min-w-full min-h-screen">
        <Board />
      </div>
    </div>
  );
};

export default Home;
