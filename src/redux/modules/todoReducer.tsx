// Action Types
enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

// Action Creator
export const addTodo = (payload: TodoItem) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload: string) => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload,
  };
};

interface TodoReducerState {
  todos: TodoItem[];
}

const initialState: TodoReducerState = {
  todos: [
    {
      id: "1",
      title: "테스트 제목1",
      content: "테스트 내용1",
      isCompleted: false,
    },
  ],
};

// interface TodoAction {
//   type: ActionTypes;
//   payload: TodoItem | string;
// }

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>;

// Reducer
const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoReducerState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const newTodoItem = action.payload as TodoItem;
      return { ...state, todos: [...state.todos, newTodoItem] };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ActionTypes.TOGGLE_TODO:
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
