import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import ViewStudent from './students/ViewStudent';
import HomeStudent from './pages/HomeStudent';
import Home from './pages/Home';
import Footer from './layout/Footer';
import HomePractices from './pages/HomePractices';
import AddPractice from './practices/AddPractice';
import EditPractice from './practices/EditPractice';
import PracticeList from './students/PracticeList';
import DoPractice from './students/DoPractice';
import ViewPractice from './practices/ViewPractices';
import HomeExams from './pages/HomeExams';
import AddExam from './exams/AddExam';
import EditExam from './exams/EditExam';
import ViewExams from './exams/ViewExams';
import ExamList from './students/ExamList';
import DoExam from './students/DoExam';
import HomeTeachers from './pages/HomeTeachers';
import AddTeacher from './teachers/AddTeacher';
import EditTeacher from './teachers/EditTeacher';
import ViewTeacher from './teachers/ViewTeacher';
import TeacherAddPractice from './teachers/TeacherAddPractice';
import MatchPractice from './teachers/MatchPractice';
import TeacherPracticeList from './teachers/TeacherPracticeList';
import Login from './login/Login';
import Register from './login/Register';
import React from 'react'
import useToken from './login/useToken';
import Profile from './login/Profile'
import EditUser from './login/EditUser';
import ProfileUpdated from './login/ProfileUpdated';



function App() {

  const { token, setToken } = useToken();

  if (!token?.id) {
    return <Login setToken={setToken} />
  }

  

  return (

    <div className="App">
      <Router>
        <Navbar token={token} />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/students" element={<HomeStudent />} />
          <Route exact path="/practices" element={<HomePractices />} />
          <Route exact path="/exams" element={<HomeExams />} />
          <Route exact path="/teachers" element={<HomeTeachers />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/editstudent/:id" element={<EditStudent />} />
          <Route exact path="/viewstudent/:id" element={<ViewStudent />} />
          <Route exact path="/addpractice" element={<AddPractice />} />
          <Route exact path="/editpractice/:id" element={<EditPractice />} />
          <Route exact path="/student/:id/dopractice" element={<PracticeList />} />
          <Route exact path="/student/:id/dopractice/:id2" element={<DoPractice />} />
          <Route exact path="/viewpractice/:id" element={<ViewPractice />} />
          <Route exact path="/addexam" element={<AddExam />} />
          <Route exact path="/editexam/:id" element={<EditExam />} />
          <Route exact path="/viewexam/:id" element={<ViewExams />} />
          <Route exact path="/student/:id/doexam" element={<ExamList />} />
          <Route exact path="/student/:id/doexam/:id2" element={<DoExam />} />
          <Route exact path="/addteacher" element={<AddTeacher />} />
          <Route exact path="/editteacher/:id" element={<EditTeacher />} />
          <Route exact path="/viewteacher/:id" element={<ViewTeacher />} />
          <Route exact path="/teacher/:id/dopractice" element={<TeacherAddPractice />} />
          <Route exact path="/teacher/:id/asignpractice" element={<TeacherPracticeList />} />
          <Route exact path="/teachers/:id/asignpractice/:id2" element={<MatchPractice />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile token={token}/>} />
          <Route exact path="/edituser/:id" element={<EditUser token={token}/>} />
          <Route exact path="/profile/:id" element={<ProfileUpdated/>} />
          <Route exact path="/login" element={<Login />} />
         
        </Routes>

        <Footer />
      </Router>



    </div>
  );
}

export default App;
