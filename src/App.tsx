import { GridBackground } from './components/BackgroundGrid';
import PdfToolsList from './components/PdfToolsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PdfOperation from './components/PdfOperation';
import PdfToWord from './pages/PdfToWord';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='relative'>
              <GridBackground />
              <PdfToolsList />
            </div>
          }
        />
        <Route path='/pdf_to_word' element={<PdfToWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
