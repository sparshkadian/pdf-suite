import { pdfFeatureProps } from '../types';
import { BackgroundGradient } from './ui/background-gradient';
import { Link } from 'react-router-dom';

const PdfToolsItem = ({ tool }: { tool: pdfFeatureProps }) => {
  return (
    <Link to={`/${tool.type}/${tool.from}/${tool.to}/${tool.title}`}>
      <BackgroundGradient className='h-[250px] sm:h-[300px] flex flex-col items-center text-center gap-3 max-w-sm p-4 sm:p-10 bg-zinc-100'>
        <img
          src={tool.image}
          alt={tool.alt}
          height='100'
          width='100'
          className='object-contain'
        />
        <p className='text-xl font-semibold'>{tool.title}</p>
        <p>{tool.description}</p>
      </BackgroundGradient>
    </Link>
  );
};

export default PdfToolsItem;
