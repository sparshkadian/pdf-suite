import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='h-screen w-screen'>
      <Link to='/pdfTools'>
        <button>PDF Tools</button>
      </Link>
      <Link to='/wordTools'>
        <button>Word Tools</button>
      </Link>
    </div>
  );
};

export default LandingPage;
