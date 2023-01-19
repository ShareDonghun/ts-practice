import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import store from "./redux/config/configStore";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/:id" element={<TodoDetailPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
