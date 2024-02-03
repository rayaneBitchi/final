import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
