import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";

const TodoDetail = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos);
  const param = useParams();
  const navigate = useNavigate();

  const todoItem = todos.find((todo) => todo.id === param.id);

  return (
    <TodoDetailContainer>
      <section>
        <h3>{todoItem && todoItem.title}</h3>
        <span>{todoItem && todoItem.content}</span>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            리스트로 돌아가기
          </button>
        </div>
      </section>
    </TodoDetailContainer>
  );
};

const TodoDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

export default TodoDetail;
