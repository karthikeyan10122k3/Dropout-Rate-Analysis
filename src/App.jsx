import Header from "./assets/Layout/Header";
import Footer from "./assets/Layout/Footer";
import Main from "../src/Pages/Home/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header first="HOME" second="About" third="Services" forth="Contact " />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
