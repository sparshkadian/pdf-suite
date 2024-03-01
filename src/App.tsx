import { GridBackground } from './components/BackgroundGrid';
import ToolsList from './components/ToolsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PDFOperations from './pages/PDFOperations';
import WordOperations from './pages/WordOperations';
import { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <div className='relative'>
              <GridBackground />
              <LandingPage />
            </div>
          }
        />

        <Route path='/pdf/:type/:from/:to/:title' element={<PDFOperations />} />
        <Route
          path='/word/:type/:from/:to/:title'
          element={<WordOperations />}
        />
        <Route path='/:toolType' element={<ToolsList />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
