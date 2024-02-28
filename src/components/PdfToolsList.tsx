import { tools } from '../constants';
import PdfToolsItem from './PdfToolsItem';

const PdfToolsList = () => {
  return (
    <div className='p-10 lg:max-w-7xl mx-auto'>
      <div className='flex flex-wrap md:flex justify-center gap-10 items-center'>
        {tools.map((tool, i) => (
          <PdfToolsItem key={i} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default PdfToolsList;
