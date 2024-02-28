import { useParams } from 'react-router-dom';

const PdfOperation = ({ type }: { type?: string }) => {
  const params = useParams();
  console.log(params);
  return <div>PdfOperation</div>;
};

export default PdfOperation;
