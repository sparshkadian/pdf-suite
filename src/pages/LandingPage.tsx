import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='flex flex-col items-center leading-tight'>
        <h1 className='hero__title'>PDF Suite</h1>
        <p className='hero__subtitle'>Do more with your PDFs and Words.</p>
        <div className='mt-4 flex gap-2'>
          <Link to='/pdfTools'>
            <button className='hero__button'>
              <span className='button__inner-span' />
              <span className='button__outer-span'>PDF Tools</span>
            </button>
          </Link>
          <Link to='/wordTools'>
            <button className='hero__button'>
              <span className='button__inner-span' />
              <span className='button__outer-span'>Word Tools</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
