import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Register />
      <Login />
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default App;
