import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Companies from "./pages/Companies/Companies";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails/JobDetails";
import SavedJobs from "./pages/SavedJobs/SavedJobs";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/savedJobs" element={<SavedJobs/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;