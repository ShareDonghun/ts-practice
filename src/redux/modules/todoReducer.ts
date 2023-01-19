// Action Types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
export const addTodo = (payload: TodoItem) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload: string) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: "1",
      title: "테스트 제목1",
      content: "테스트 내용1",
      isCompleted: false,
    },
  ],
};

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>;

// Reducer
const todoReducer = (
  state: {
    todos: TodoItem[];
  } = initialState,
  action: TodoAction
): { todos: TodoItem[] } => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload as TodoItem;
      return { ...state, todos: [...state.todos, newTodo] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  }
};

//export default
export default todoReducer;
