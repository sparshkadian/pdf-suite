import { GridBackground } from './components/BackgroundGrid';
import PdfToolsList from './components/PdfToolsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PDFOperations from './pages/PDFOperations';
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

        <Route path='/:type/:from/:to/:title' element={<PDFOperations />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
