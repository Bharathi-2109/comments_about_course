import "./styles.css";
import FormComponent from "./Components/FormComponent";

import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Header />
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
