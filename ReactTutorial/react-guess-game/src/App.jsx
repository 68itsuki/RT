import { Provider } from "react-redux";
import { store } from "./app/store";
import Game from "./Game";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
export default App;