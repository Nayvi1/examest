import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
