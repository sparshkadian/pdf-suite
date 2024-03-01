import { Link } from 'react-router-dom';
import { LampContainer } from '../components/ui/lamp';
import { Button } from '../components/ui/moving-border';

const LandingPage = () => {
  return (
    <LampContainer className='h-screen w-screen flex justify-center items-center'>
      <div className='hero__content flex flex-col items-center leading-tight'>
        <h1 className='hero__title text-white google-font'>PDF Suite</h1>
        <p className='hero__subtitle google-font'>
          Do more with your PDFs and Words.
        </p>
        <div className='mt-10 flex gap-4'>
          <Link to='/pdfTools'>
            <Button>PDF Tools</Button>
          </Link>
          <Link to='/wordTools'>
            <Button>Word Tools</Button>
          </Link>
        </div>
      </div>
    </LampContainer>
  );
};

export default LandingPage;
