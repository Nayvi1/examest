import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Login from "./pages/Login";
import StudentLogin from "./components/Login/Student/StudentLogin";
import TeacherLogin from "./components/Login/Teacher/TeacherLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="login" element={<Login />}>
          <Route path="student" element={<StudentLogin />} />
          <Route path="teacher" element={<TeacherLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
