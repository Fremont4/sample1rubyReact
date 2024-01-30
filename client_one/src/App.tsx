// import { useState } from 'react'
import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import AboutPage from "./Components/Pages/AboutPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About me
            </Link>
          </Container>
        </Navbar>
        <br />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
