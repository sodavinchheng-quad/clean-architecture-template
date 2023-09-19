import { Provider } from "react-redux";
import "./App.css";
import { BasePage } from "./view";
import store from "./view/ducks/store";

const App = () => {
  return (
    <Provider store={store}>
      <BasePage />
    </Provider>
  );
};

export default App;
