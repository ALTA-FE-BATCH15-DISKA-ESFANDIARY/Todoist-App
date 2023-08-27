import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route element = {<Home/>} path="/" />
      <Route element={<Detail />} path="/detail" />
    </Routes> 
    </BrowserRouter>
  )
}

export default App