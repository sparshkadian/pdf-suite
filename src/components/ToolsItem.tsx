import { ToolProps } from '../types';
import { BackgroundGradient } from './ui/background-gradient';
import { Link } from 'react-router-dom';

const ToolsItem = ({ tool }: { tool: ToolProps }) => {
  return (
    <Link to={`/${tool.from === 'pdf' ? 'pdf' : 'word'}`} state={tool}>
      <BackgroundGradient className='h-[250px] sm:h-[300px] w-[300px]  flex flex-col items-center text-center justify-center gap-3 max-w-sm p-4 bg-white'>
        <div>
          <img
            src={tool.image}
            alt={tool.alt}
            height='100'
            width={tool.width}
            className='object-contain'
          />
        </div>
        <p className='text-xl font-semibold'>{tool.title}</p>
        <p>{tool.description}</p>
      </BackgroundGradient>
    </Link>
  );
};

export default ToolsItem;
