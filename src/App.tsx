import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Config from "./pages/config";
import Raffle from "./pages/raffle";

function App() {
  return (
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Config/>}/>
        <Route path="/raffle" element={<Raffle/>}/>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>)
}

export default App;
