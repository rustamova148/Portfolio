import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import tm from "../src/assets/task-m.jpg"
import cw from "../src/assets/course.jpg"
import pg from "../src/assets/password-gen.jpg"
import ta from "../src/assets/todo-app.jpg"
import ec from "../src/assets/e-comm.jpg"
import tar from "../src/assets/tar.jpg"

function App() {
const projects = [
    {id:1, name:"Task Management", img: tm},
    {id:2, name:"Course Website", img: cw},
    {id:3, name:"Password Generator", img: pg},
    {id:4, name:"Todo App with Redux toolkit", img: ta},
    {id:5, name:"Small E-commerce", img: ec},
    {id:6, name:"Todo App React", img: tar},
]
  return (
    <div className="bg-[#859471] w-full min-h-screen overflow-y:scroll">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio projects={projects} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
