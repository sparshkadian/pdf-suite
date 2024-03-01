import { PdfTools } from '../constants/PDF';
import { WordTools } from '../constants/Word';
import ToolsItem from './ToolsItem';
import { useParams } from 'react-router-dom';

const ToolsList = () => {
  const params = useParams();
  return (
    <div className='p-10 lg:max-w-7xl mx-auto'>
      <div className='mt-6 flex flex-wrap md:flex justify-center gap-10 items-center'>
        {params.toolType === 'pdfTools'
          ? PdfTools.map((tool, i) => <ToolsItem key={i} tool={tool} />)
          : WordTools.map((tool, i) => <ToolsItem key={i} tool={tool} />)}
      </div>
    </div>
  );
};

export default ToolsList;
