import { GridBackground } from './components/BackgroundGrid';
import PdfToolsList from './components/PdfToolsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PdfToWord from './pages/PdfToWord';
import { Toaster } from 'react-hot-toast';

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
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
