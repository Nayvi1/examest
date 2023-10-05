import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Login from "./pages/Login";
import StudentLogin from "./components/Login/Student/StudentLogin";
import TeacherLogin from "./components/Login/Teacher/TeacherLogin";
import Teacher from "./pages/Teacher";
import CreateQuestion from "./pages/CreateQuestion";
import QuestionContext from "./context/QuestionContext";
import EditQuestions from "./pages/EditQuestions";

function App() {
  return (
    <QuestionContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="login" element={<Login />}>
            <Route index element={<Navigate to="/" />} />
            <Route path="student" element={<StudentLogin />} />
            <Route path="teacher" element={<TeacherLogin />} />
          </Route>
          <Route path="student" element={"s"} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="teacher/newQuestion" element={<CreateQuestion />} />
          <Route path="teacher/:questionId" element={<EditQuestions />} />
        </Routes>
      </BrowserRouter>
    </QuestionContext>
  );
}

export default App;
