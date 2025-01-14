import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AppRouter from "./components/AppRouter.js";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
