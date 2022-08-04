import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/About/about-info/About';

import HomePage from './components/Home/HomePage/HomePage';
import Navbar from './components/Home/navbar/Navbar';
import ProjectPage from './components/Projects/ProjectPage/ProjectPage';
import ContactPage from './components/Contact/ContactPage/ContactPage';
import JumboVismaManager from './components/About/MoreInfo/JumboVismaMoreInfo/JumboVismaManager';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='projects' element={<ProjectPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route
          path='tjv-rider-manager'
          element={<JumboVismaManager />}
        />
      </Routes>
    </>
  );
}

export default App;
