import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./pages/Courses";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
// import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import DetailCoursePages from "./pages/DetailCoursespages";
import AddCourse from "./component/Course/AddCourse";
import TableCourse from "./component/Course/TableCourse";
import NotFound from "./pages/NotFound";
import TableTrainer from "./component/Trainer/TableTrainer";
import AddTrainer from "./component/Trainer/AddTrainer";
import EditCourse from "./component/Course/EditCourse";
import EditTrainer from "./component/Trainer/EditTrainer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:id" element={<DetailCoursePages />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="course/add" element={<AddCourse />} />
          <Route path="table-courses/course/edit/:id" element={<EditCourse />} />
          <Route path="table-courses" element={<TableCourse />} />
          <Route path="trainer/add" element={<AddTrainer />} />
          <Route path="/trainer/edit/:id" element={<EditTrainer/>} />
          <Route path="table-trainer" element={<TableTrainer />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
