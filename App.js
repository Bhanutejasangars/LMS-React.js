import "./App.css";
import { NavBar } from "./components";
import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app_box">
        <BrowserRouter>
          <NavBar />
          <Router />
          <ToastContainer
            transition={Flip}
            position="top-center"
            theme="dark"
            autoClose={1000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
