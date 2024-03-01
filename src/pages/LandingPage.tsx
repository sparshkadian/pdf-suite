import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='flex flex-col items-center leading-tight'>
        <h1 className='hero__title'>PDF Suite</h1>
        <p className='hero__subtitle'>Do more with your PDFs and Words.</p>
        <div className='mt-4 flex gap-2'>
          <Link to='/pdfTools'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 font-medium text-black backdrop-blur-3xl'>
                PDF Tools
              </span>
            </button>
          </Link>
          <Link to='/wordTools'>
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-200'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-black px-3 py-1 font-medium backdrop-blur-3xl'>
                Word Tools
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
