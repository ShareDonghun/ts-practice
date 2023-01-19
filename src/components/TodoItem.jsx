import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/modules/todoReducer";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <TodoItemContainer>
      <div>제목: {todo.title}</div>
      <div>내용: {todo.content}</div>
      <button
        onClick={() => {
          dispatch(toggleTodo(todo.id));
        }}
      >
        {todo.isCompleted ? "취소" : "완료"}
      </button>
      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        삭제
      </button>
      <br />
      <Link to={`/${todo.id}`}>상세보기</Link>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.div`
  border: 1px solid black;
  margin: 10px;
`;

export default TodoItem;
