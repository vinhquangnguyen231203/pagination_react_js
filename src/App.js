import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Products/>
      </Provider>
    </div>
  );
}

export default App;
