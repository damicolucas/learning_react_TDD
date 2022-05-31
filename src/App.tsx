import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Config from "./pages/config";

function App() {
  return (
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Config/>}/>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>)
}

export default App;
