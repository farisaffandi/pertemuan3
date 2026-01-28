import "./App.css";
import React, { Component } from "react";

function App() {
  return (
    <>
      <Header />
      <h1>To-do List :</h1>
      <ol>
        <li>Mengerjakan Tugas Front End</li>
        <li>Mempelajari Tutorial react js</li>
        <li>Murojaah Juz 1</li>
      </ol>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Faris Affandi</h3>
        <span>Make With &#10084; </span>
      </footer>
    );
  }
}

export default App;