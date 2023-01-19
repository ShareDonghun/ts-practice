import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";
import { RootState } from "../redux/config/configStore";

const TodoListPage = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  const todoItems = todos.filter((todo: TodoItem) => !todo.isCompleted);
  const doneItems = todos.filter((todo: TodoItem) => todo.isCompleted);

  return (
    <TodoListContainer>
      <h1>TodoList</h1>
      <TodoInput />
      <ContentContainer>
        <div>
          <h2>Todo</h2>
          {todoItems.map((todo: TodoItem) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
        <div>
          <h2>Done</h2>
          {doneItems.map((todo: TodoItem) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </ContentContainer>
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: content;
`;

const ContentContainer = styled.div``;

export default TodoListPage;
