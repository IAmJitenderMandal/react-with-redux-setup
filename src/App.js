import "./App.css";

// redux
import { Provider } from "react-redux";
import store from "./store";

// custom components
import First from "./components/first.component";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <First />
      </div>
    </Provider>
  );
}

export default App;
