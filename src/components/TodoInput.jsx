import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoReducer";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <label htmlFor="title">제목</label>
      <input
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label htmlFor="content">내용</label>
      <input
        name="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          setContent("");
          setTitle("");

          dispatch(
            addTodo({
              title,
              content,
              isCompleted: false,
              id: Date.now().toString(),
            })
          );
        }}
      >
        추가
      </button>
    </form>
  );
};

export default TodoInput;
