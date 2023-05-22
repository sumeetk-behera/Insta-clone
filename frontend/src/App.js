import Home from "./Components/Home/Home";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <div className="App">

      {/* {
        (localStorage.getItem("users") == undefined || localStorage.getItem("users") == null) ?
          <LoginPage /> : <Home />
      } */}
      <Home />

    </div>
  );
}

export default App;
