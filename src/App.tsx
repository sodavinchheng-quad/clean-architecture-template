import "./App.css";
import store from "./ducks/store";
import { Provider } from "react-redux";
import { BasePage } from "./view";

const App = () => {
  return (
    <Provider store={store}>
      <BasePage />
    </Provider>
  );
};

export default App;
