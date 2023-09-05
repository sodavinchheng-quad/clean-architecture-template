import "./App.css";
import store from "./ducks/store";
import { Provider } from "react-redux";
import { UserListPage } from "./view/pages";

const App = () => {
  return (
    <Provider store={store}>
      <UserListPage />
    </Provider>
  );
};

export default App;
